// Copyright (c) 2006-2008 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "chrome/common/json_value_serializer.h"

#include "base/file_util.h"
#include "base/json_reader.h"
#include "base/json_writer.h"
#include "base/string_util.h"
#include "chrome/common/logging_chrome.h"

JSONStringValueSerializer::~JSONStringValueSerializer() {}

bool JSONStringValueSerializer::Serialize(const Value& root) {
  if (!json_string_ || initialized_with_const_string_)
    return false;

  JSONWriter::Write(&root, pretty_print_, json_string_);

  return true;
}

bool JSONStringValueSerializer::Deserialize(Value** root) {
  if (!json_string_)
    return false;

  return JSONReader::Read(*json_string_, root, allow_trailing_comma_);
}

/******* File Serializer *******/

bool JSONFileValueSerializer::Serialize(const Value& root) {
  std::string json_string;
  JSONStringValueSerializer serializer(&json_string);
  serializer.set_pretty_print(true);
  bool result = serializer.Serialize(root);
  if (!result)
    return false;

  int data_size = static_cast<int>(json_string.size());
  if (file_util::WriteFile(json_file_path_,
                           json_string.data(),
                           data_size) != data_size)
    return false;

  return true;
}

bool JSONFileValueSerializer::Deserialize(Value** root) {
  std::string json_string;
  if (!file_util::ReadFileToString(json_file_path_, &json_string)) {
    return false;
  }
  JSONStringValueSerializer serializer(json_string);
  return serializer.Deserialize(root);
}


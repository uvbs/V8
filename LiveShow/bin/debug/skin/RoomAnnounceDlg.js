
var SKIN_ON_CLICK_BTN_PREVIEW = 1;
var SKIN_ON_CLICK_BTN_ADD = 2;
var SKIN_ON_CLICK_BTN_SAVE_MODIFY = 3;
var SKIN_ON_CLICK_BTN_DELETE = 4;
var SKIN_ON_CLICK_BTN_TEACHYOU = 5;


Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);

btnPreview.AttachEvent("OnClick",OnClickBtnPreview);
btnAdd.AttachEvent("OnClick",OnClickBtnAdd);
btnSaveModify.AttachEvent("OnClick",OnClickBtnSaveModify);
btnDelete.AttachEvent("OnClick",OnClickBtnDelete);
btnTeachYou.AttachEvent("OnClick",OnClickBtnTeachYou);

function OnClickBtnPreview()
{
    Window.PostSkinMessage(SKIN_ON_CLICK_BTN_PREVIEW,0);
}

function OnClickBtnAdd()
{
    Window.PostSkinMessage(SKIN_ON_CLICK_BTN_ADD,0);
}

function OnClickBtnSaveModify()
{
    Window.PostSkinMessage(SKIN_ON_CLICK_BTN_SAVE_MODIFY,0);
}

function OnClickBtnDelete()
{
    Window.PostSkinMessage(SKIN_ON_CLICK_BTN_DELETE,0);
}

function OnClickBtnTeachYou()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_BTN_TEACHYOU,0);
}

function OnInit()
{
	OnSize(Window.width, Window.height);
}


function OnSize(cx, cy)
{
	imgRoomAnnounceDlgBk.visible = true;
	imgRoomAnnounceDlgBk.left = 0;
	imgRoomAnnounceDlgBk.top = 0;
	imgRoomAnnounceDlgBk.width = cx;
	imgRoomAnnounceDlgBk.height = cy;
	
	// RoomAnnounceDlgTitleEffect.visible = false;
	// RoomAnnounceDlgTitleEffect.left = 0; 
	// RoomAnnounceDlgTitleEffect.top = 0;
	
	imgTitleIcon.visible = true;
	imgTitleIcon.left = 10;
	imgTitleIcon.top = 1;

	textTheTitle.visible = true;
	textTheTitle.left = imgTitleIcon.left + imgTitleIcon.width + 5;
	textTheTitle.top = 4;
	textTheTitle.width = textTheTitle.textWidth;
	textTheTitle.height = textTheTitle.textHeight;
	
	imgTitleLine.visible = true;
	imgTitleLine.left = textTheTitle.left + textTheTitle.width + 2;
	imgTitleLine.top = textTheTitle.top +(textTheTitle.height - imgTitleLine.height)/2;
	////////////////////////
	textContent.visible = true;
	textContent.left = imgRoomAnnounceDlgBk.left + 60;
	textContent.top = textTheTitle.top + textTheTitle.height + 28;
	textContent.width = textContent.textWidth;
	textContent.height = textContent.textHeight;
	
	textContentPrompt.visible = true;
	textContentPrompt.left = textContent.left + textContent.width + 10;
	textContentPrompt.top = textContent.top;
	textContentPrompt.width = textContentPrompt.textWidth;
	textContentPrompt.height = textContentPrompt.textHeight;
	
	btnTeachYou.visible = true;
	btnTeachYou.width = 120;
	btnTeachYou.height = textContentPrompt.height + 6;
	btnTeachYou.left = textContentPrompt.left + 390 - btnTeachYou.width;
	btnTeachYou.top = textContentPrompt.top - 2;
	
	imgContentBound.visible = true;
	imgContentBound.left = textContentPrompt.left;
	imgContentBound.top = textContentPrompt.top + textContentPrompt.height + 4;
	imgContentBound.width = imgRoomAnnounceDlgBk.width - 220;
	imgContentBound.height = 100;
	
	itemHtmlRoomAnnounce.visible = true;
	itemHtmlRoomAnnounce.left = imgContentBound.left + 3;
	itemHtmlRoomAnnounce.top = imgContentBound.top + 3;
	itemHtmlRoomAnnounce.width = imgContentBound.width - 6;
	itemHtmlRoomAnnounce.height = imgContentBound.top + imgContentBound.height - 4 - itemHtmlRoomAnnounce.top;
	
	btnPreview.visible = true;
	btnPreview.left = itemHtmlRoomAnnounce.left - 15;
	btnPreview.top = itemHtmlRoomAnnounce.top + itemHtmlRoomAnnounce.height + 5;

	btnSaveModify.visible = true;
	btnSaveModify.left = itemHtmlRoomAnnounce.left + itemHtmlRoomAnnounce.width + 15 - btnSaveModify.width;
	btnSaveModify.top = btnPreview.top;
	
	btnAdd.visible = true;
	btnAdd.left = btnPreview.left + btnPreview.width;
	btnAdd.top = btnSaveModify.top;
	////////////////////////////////////
	textSavedAnnounce.visible = true;
	textSavedAnnounce.width = textSavedAnnounce.textWidth;
	textSavedAnnounce.height = textSavedAnnounce.textHeight;
	textSavedAnnounce.left = textContent.left + textContent.width - textSavedAnnounce.width;
	textSavedAnnounce.top = btnPreview.top + btnPreview.height + 15;
	
	savedAnnounceList.visible = true;
	savedAnnounceList.left = imgContentBound.left;
	savedAnnounceList.top = textSavedAnnounce.top;
	savedAnnounceList.width = imgContentBound.width;
	savedAnnounceList.height = 100;
	
	btnDelete.visible = true;
	btnDelete.left = btnPreview.left;
	btnDelete.top = savedAnnounceList.top + savedAnnounceList.height + 5;

	textMostSave.visible = true;
	textMostSave.left = btnDelete.left + btnDelete.width + 10;
	textMostSave.top = btnDelete.top + 13;
	textMostSave.width = textMostSave.textWidth;
	textMostSave.height = textMostSave.textHeight;
	
	imgApplyEffect.left = 0;
	imgApplyEffect.top = 0;
	imgApplyEffect.width = cx;
	imgApplyEffect.height = cy;
	
}

function OnNotify(code, code1)
{
  switch(code)
  {
  default:
    break;
  }
}

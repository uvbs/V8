#pragma once
#include "net\packet.h"
#include "..\ProtocolBase.h"
#include "..\ProtocolDefine.h"
#include "coredefine.h"

class ShutUpPacket : public ClientPacket
{
public:
	ShutUpPacket(Event const& _event)
		:ClientPacket(ROOM_SHUT_UP_REQ, _event.param0),unDstUIN(_event.param1){};

	void Pack()
	{
		HeadBusiness();
		*this<<unDstUIN;
		ClientPacket::SetAttachData(unDstUIN);
		TailBusiness();
	}

	uint32 unDstUIN;
};

//////////////////////////////////////////////////////////////////////////

class ShutUpRspPacket : public ServerPacket
{
public:
	ShutUpRspPacket(ByteBuf & buf, uint32 unseq):ServerPacket(buf), seq(unseq){};

	void Unpack()
	{
		ServerPacket::Unpack();
		uint32 result=0;
		*this>>result;
		enmResult = (core::ENM_KickResult)result;
		unDstUIN = ClientPacket::GetAttachData(seq);
	}

	core::ENM_KickResult enmResult;
	uint32 unDstUIN;

private:
	uint32 seq;
};

//////////////////////////////////////////////////////////////////////////

class ShutUpNotifyPacket : public ServerPacket
{
public:
	ShutUpNotifyPacket(ByteBuf & buf , core::ShutUpNotifyEvent& _event )
		:ServerPacket(buf), stEvent(_event){};

	void Unpack()
	{
		ServerPacket::Unpack();
		*this>>stEvent.srcUIN>>stEvent.dstUIN>>stEvent.unLeftTime;
	}

private:
	core::ShutUpNotifyEvent& stEvent;
};

//////////////////////////////////////////////////////////////////////////
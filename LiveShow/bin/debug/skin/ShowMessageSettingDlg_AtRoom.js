
var SKIN_ON_CLICK_BTN_AUTORES_SET = 1;

Window.AttachEvent("OnInit", OnInit);
//Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);

// btnAutoResSetting.AttachEvent("OnClick",OnClickBtnAutoResSet);


function OnClickBtnAutoResSet()
{
     Window.PostSkinMessage(SKIN_ON_CLICK_BTN_AUTORES_SET,0);
}

function OnInit()
{
	OnSize(Window.width, Window.height);
}


function OnSize(cx, cy)
{
	ShowMessageSettingBk.visible = true;
	ShowMessageSettingBk.left = 0;
	ShowMessageSettingBk.top = 0;
	ShowMessageSettingBk.width = cx;
    ShowMessageSettingBk.height = cy;
	
////////////////////////////////////////////////

    //////////////////////////////////////
    imgTitleIcon.visible = true;
	imgTitleIcon.left = 10;
	imgTitleIcon.top = 2;

	textTheTitle.visible = true;
	textTheTitle.left = imgTitleIcon.left + imgTitleIcon.width + 5;
	textTheTitle.top = 4;
	textTheTitle.width = textTheTitle.textWidth;
	textTheTitle.height = textTheTitle.textHeight;
	
	imgLine.left = textTheTitle.left + textTheTitle.width + 6;
	imgLine.top = textTheTitle.top + 5;
	  
    textP2P.visible = true ;
    textP2P.left = 150;
	textP2P.top = imgTitleIcon.top + imgTitleIcon.height + 10 ;
    textP2P.width = textP2P.textWidth ;
    textP2P.height = textP2P.textHeight ;
        
 	P2PTextVIP.visible = true ;
    P2PTextVIP.left = textP2P.left + textP2P.width;
    P2PTextVIP.top = textP2P.top;
    P2PTextVIP.width = P2PTextVIP.textWidth ;
    P2PTextVIP.height = P2PTextVIP.textHeight ;
        
    radioAcceptVIPP2P.visible = true ;
    radioAcceptVIPP2P.left = textP2P.left + 25;
    radioAcceptVIPP2P.top = textP2P.top + textP2P.height + 10 ;
  
	radioAcceptSilverP2P.visible = true ;
    radioAcceptSilverP2P.left = radioAcceptVIPP2P.left ;
	radioAcceptSilverP2P.top = radioAcceptVIPP2P.top + radioAcceptVIPP2P.height + 10 ;
       
 	radioRefuseP2P.visible = true ;
 	radioRefuseP2P.left = radioAcceptSilverP2P.left ;
	radioRefuseP2P.top = radioAcceptSilverP2P.top + radioAcceptSilverP2P.height + 10 ;

    imgP2PLine.visible = true ;
    imgP2PLine.left = 5 ;
    imgP2PLine.top = radioRefuseP2P.top + radioRefuseP2P.height + 15 ;
    imgP2PLine.width = cx - 10;
    imgP2PLine.height = 1;
	       
	///////////////////////////////////////
	
	textGiftAndSpeaker.visible = true;
	textGiftAndSpeaker.left = textP2P.left;
	textGiftAndSpeaker.top = imgP2PLine.top + imgP2PLine.height + 15;
	textGiftAndSpeaker.width = textGiftAndSpeaker.textWidth;
	textGiftAndSpeaker.height = textGiftAndSpeaker.textHeight;
	
	itemCheckSendGiftMsg.visible = true;								//屏蔽送礼物消息
	itemCheckSendGiftMsg.left = radioAcceptVIPP2P.left;
	itemCheckSendGiftMsg.top = textGiftAndSpeaker.top + textGiftAndSpeaker.height + 10;
	
	itemCheckLuckySound.visible = true;								//屏蔽送礼物消息
	itemCheckLuckySound.left = itemCheckSendGiftMsg.left;
	itemCheckLuckySound.top = itemCheckSendGiftMsg.top + itemCheckSendGiftMsg.height + 10;
	
	
	itemCheckSpeakerSound.visible = true;								//屏蔽喇叭声音
	itemCheckSpeakerSound.left = itemCheckSendGiftMsg.left + itemCheckSendGiftMsg.width + 30;
	itemCheckSpeakerSound.top = itemCheckSendGiftMsg.top;
	
	
	textVIP.visible = true;
	textVIP.width = textVIP.textWidth;
	textVIP.height = textVIP.textHeight;
	textVIP.left = itemCheckSpeakerSound.left + itemCheckSpeakerSound.width;
	textVIP.top = itemCheckSpeakerSound.top + 1;
	
	LuckySoundtextVIP.visible = true;
	LuckySoundtextVIP.width = LuckySoundtextVIP.textWidth;
	LuckySoundtextVIP.height = LuckySoundtextVIP.textHeight;
	LuckySoundtextVIP.left = itemCheckLuckySound.left + itemCheckLuckySound.width;
	LuckySoundtextVIP.top = itemCheckLuckySound.top + 1;
	
	imgGiftSpeakerLine.visible = true;
	imgGiftSpeakerLine.left = 5;
	imgGiftSpeakerLine.top = itemCheckLuckySound.top + itemCheckLuckySound.height + 15;
	imgGiftSpeakerLine.width = cx - 10;
	imgGiftSpeakerLine.height = 1;
	//////////////////////////////////////////
	
	
    textChatMessage.visible = true;
	textChatMessage.left =textGiftAndSpeaker.left;
	textChatMessage.top = imgGiftSpeakerLine.top + imgGiftSpeakerLine.height + 15;
	textChatMessage.width = textChatMessage.textWidth;
	textChatMessage.height = textChatMessage.textHeight;
	
	itemCheckPublicChatMsg.visible = true;						//屏蔽公聊消息
	itemCheckPublicChatMsg.left = itemCheckSendGiftMsg.left;
	itemCheckPublicChatMsg.top = textChatMessage.top + textChatMessage.height + 10;
	
	itemCheckPrivateChatMsg.visible = true;						//屏蔽私聊消息
	itemCheckPrivateChatMsg.left = itemCheckSpeakerSound.left;
	itemCheckPrivateChatMsg.top = itemCheckPublicChatMsg.top;
	
	imgChatMessageLine.visible = true;
	imgChatMessageLine.left = 5;
	imgChatMessageLine.top = itemCheckPublicChatMsg.top + itemCheckPublicChatMsg.height + 15;
	imgChatMessageLine.width = cx - 10;
	imgChatMessageLine.height = 1;
	
	////////////////////////////////////////////
	textPublicMsg.visible = true;
	textPublicMsg.left = textChatMessage.left;
	textPublicMsg.top = imgChatMessageLine.top + imgChatMessageLine.height + 15;
	textPublicMsg.width = textPublicMsg.textWidth;
	textPublicMsg.height = textPublicMsg.textHeight;
	
	itemCheckUserInOut.visible = true;
	itemCheckUserInOut.left = itemCheckPublicChatMsg.left;
	itemCheckUserInOut.top = textPublicMsg.top + textPublicMsg.height + 10;
	
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

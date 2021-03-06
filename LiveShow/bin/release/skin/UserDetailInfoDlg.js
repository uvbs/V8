
var SKIN_ON_CLICK_CLOSE = 1;
var SKIN_ON_CLICK_MGR_CENTER = 2;

var SKIN_ON_CLICK_USERINFO = 3;
var SKIN_ON_CLICK_MYROOM = 4;
var SKIN_ON_CLICK_MYACCOUNT = 5;
var SKIN_ON_CLICK_SAFEBOX = 6;
var SKIN_ON_CLICK_SETTING = 7;

Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);

btnSysClose.AttachEvent("OnClick", btnCloseOnClick);

op_mgrCenter.AttachEvent("OnClick", OnClickMgrCenter);
op_close.AttachEvent("OnClick", btnCloseOnClick);

btnSetting.AttachEvent("OnClick",OnClickBtnSetting);

textItemUserInfo.AttachEvent("OnClick",OnClickUserInfo);
iconUserInfo.AttachEvent("OnClick",OnClickUserInfo);
textItemMyRoom.AttachEvent("OnClick",OnClickMyRoom);
iconMyRoom.AttachEvent("OnClick",OnClickMyRoom);
textMyAccount.AttachEvent("OnClick",OnClickInviteNum);
iconMyAccount.AttachEvent("OnClick",OnClickInviteNum);


function btnCloseOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_CLOSE, 0);
}

function OnClickMgrCenter()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_MGR_CENTER, 0);
}


function OnClickUserInfo()
{
    imgInfoBk.visible = true;
	imgMyRoomBk.visible = false;
	imgMyAccountBk.visible = false;
	Window.PostSkinMessage(SKIN_ON_CLICK_USERINFO, 0);
}

function OnClickMyRoom()
{
    imgInfoBk.visible = false;
	imgMyRoomBk.visible = true;
	imgMyAccountBk.visible = false;
	Window.PostSkinMessage(SKIN_ON_CLICK_MYROOM, 0);
}

function OnClickInviteNum()
{
    imgInfoBk.visible = false;
	imgMyRoomBk.visible = false;
	imgMyAccountBk.visible = true;
	Window.PostSkinMessage(SKIN_ON_CLICK_MYACCOUNT, 0);
}

function OnClickBtnSafeBox()
{
    Window.PostSkinMessage(SKIN_ON_CLICK_SAFEBOX,0);
}

function OnClickBtnSetting()
{
    Window.PostSkinMessage(SKIN_ON_CLICK_SETTING,0);
}

function OnInit()
{   
    textTitle.visible = true;
	textTitle.text = "个人详细信息";
    textTitle.fontWeight = 500;
	textTitle.fontSize = 11;
    textTitle.normalColor = 0xffffff;
    textTitle.colorTransform = true;
	
	OnSize(Window.width, Window.height);
}

function OnSize(cx, cy)
{	
    textTitle.width = textTitle.textWidth;
	textTitle.height = textTitle.textHeight;
	textTitle.left = imgTitleIcon.left + imgTitleIcon.width + 10;
	textTitle.top = 0 + (32 - textTitle.height)/2 ;

	var leftMargin = 4;
	var topMargin = 4;

	var btnTop = cy - op_close.height - 10;

	op_close.width = 85;
	op_close.height = 29;
	op_close.left = cx - op_close.width - 19;
	op_close.top = btnTop;

	op_mgrCenter.width = op_close.width;
	op_mgrCenter.height = op_close.height;
	op_mgrCenter.left = op_close.left - op_mgrCenter.width - 14;
	op_mgrCenter.top = btnTop;

	ImgUserInfoBk.visible = true;
	ImgUserInfoBk.left = 1;
	ImgUserInfoBk.top = 32;
	ImgUserInfoBk.width = cx - 2;
	ImgUserInfoBk.height = cy - textTitle.height - 5 - 55;
	
	imgSysSettingBottomBk.left = ImgUserInfoBk.left;
	imgSysSettingBottomBk.top = ImgUserInfoBk.top + ImgUserInfoBk.height;
	imgSysSettingBottomBk.width = ImgUserInfoBk.width;
	imgSysSettingBottomBk.height = cy - imgSysSettingBottomBk.top;

	imgSysSettingTitleBar.left = cx/2;
	imgSysSettingTitleBar.top = 1;
	imgSysSettingTitleBar.width = btnSysClose.left - imgSysSettingTitleBar.left;
	imgSysSettingTitleBar.height = ImgUserInfoBk.top - 0;
	
	headBorder.visible = true;
	headBorder.left = ImgUserInfoBk.left + 12;
	headBorder.top = ImgUserInfoBk.top + 10;
	headBorder.width = 130;
	headBorder.height = 130;
	
	//浏览器背景
	imgHtmlBk.visible = true;
	imgHtmlBk.left = headBorder.left + headBorder.width + 7;
	imgHtmlBk.top = headBorder.top;
	imgHtmlBk.width = ImgUserInfoBk.width - headBorder.width - 24;
	imgHtmlBk.height = ImgUserInfoBk.top + ImgUserInfoBk.height - 7 - imgHtmlBk.top;
	//浏览器
	itemHtmlInfo.visible = true;
	itemHtmlInfo.left = imgHtmlBk.left + 1;
	itemHtmlInfo.top = imgHtmlBk.top + 1;
	itemHtmlInfo.width = imgHtmlBk.width - 2;
	itemHtmlInfo.height = imgHtmlBk.height - 5;
	
	UserHead.visible = true;
	UserHead.left = headBorder.left;
	UserHead.top = headBorder.top;
	UserHead.width = headBorder.width;
	UserHead.height = headBorder.height;
	
	btnSetting.visible = true;
	btnSetting.width = 65;
	btnSetting.height = 21;
	btnSetting.left = UserHead.left + (UserHead.width - btnSetting.width)/2;
	btnSetting.top = UserHead.top + UserHead.height + 7;
	
	imgAllItemsBk.visible = true;
	imgAllItemsBk.left = UserHead.left + 7;
	imgAllItemsBk.top = btnSetting.top + btnSetting.height + 7;
	imgAllItemsBk.width = headBorder.width - 14;
	imgAllItemsBk.height = ImgUserInfoBk.top + ImgUserInfoBk.height - 10 - imgAllItemsBk.top;
	
	imgInfoBk.visible = true;
	imgInfoBk.left = imgAllItemsBk.left - 7;
	imgInfoBk.top = imgAllItemsBk.top + 2;
	imgInfoBk.width = 132;
	imgInfoBk.height = 24;
	iconUserInfo.visible = true;
	iconUserInfo.left = imgInfoBk.left + 10
	iconUserInfo.top = imgInfoBk.top + 6;
	textItemUserInfo.visible = true;
	textItemUserInfo.left = iconUserInfo.left + iconUserInfo.width + 2;
	textItemUserInfo.top = imgInfoBk.top + 6;
	textItemUserInfo.width = 100;
	textItemUserInfo.height = 20;
	
	imgMyRoomBk.visible = false;
	imgMyRoomBk.left = imgInfoBk.left;
	imgMyRoomBk.top = imgInfoBk.top + imgInfoBk.height;
	imgMyRoomBk.width = imgInfoBk.width;
	imgMyRoomBk.height = imgInfoBk.height;
	iconMyRoom.visible = true;
	iconMyRoom.left = iconUserInfo.left;
	iconMyRoom.top = imgMyRoomBk.top + 6;
	textItemMyRoom.visible = true;
	textItemMyRoom.left = iconMyRoom.left + iconMyRoom.width + 2;
	textItemMyRoom.top = imgMyRoomBk.top + 6;
	textItemMyRoom.width = textItemUserInfo.width;
	textItemMyRoom.height = textItemUserInfo.height;
	
	imgMyAccountBk.visible = false;
	imgMyAccountBk.left = imgInfoBk.left;
	imgMyAccountBk.top = imgMyRoomBk.top + imgMyRoomBk.height;
	imgMyAccountBk.width = imgInfoBk.width;
	imgMyAccountBk.height = imgInfoBk.height;
	iconMyAccount.visible = true;
	iconMyAccount.left = iconMyRoom.left;
	iconMyAccount.top = imgMyAccountBk.top + 6;
	textMyAccount.visible = true;
	textMyAccount.left = iconMyAccount.left + iconMyAccount.width + 2;
	textMyAccount.top = imgMyAccountBk.top + 6;
	textMyAccount.width = textItemUserInfo.width;
	textMyAccount.height = textItemUserInfo.height;
	
	

}

function OnNotify(code, code1)
{
	
}

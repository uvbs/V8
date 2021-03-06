
var SKIN_ON_CLICK_CLOSE = 1;
var SKIN_ON_CLICK_USERINFO = 2;
var SKIN_ON_CLICK_ITS_ROOM = 3;
var SKIN_ON_CLICK_ITS_FANS = 4;
var SKIN_ON_CLICK_BANKACCOUNT = 5;
var SKIN_NOTIFY_BANKACCOUNT_DLG_SHOW = 6;
var SKIN_NOTIFY_ITSFANS_DLG_SHOW = 7;
var BankAccountDlgIsShow = 0; //银行账号是否显示  0为不显示 1为显示  默认为0不显示
var ItsFansDlgIsShow = 0;     //TA的粉丝是否显示  0为不显示 1为显示  默认为0不显示

var last_imgItsBk_left = 0;
var last_imgItsBk_top = 0;
var last_imgItsBk_height = 0;
var last_imgItsBk_width = 0;
var last_iconIts_left = 0;
var last_textItem_widht = 0;
var last_textItem_height = 0;
	
Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);

btnSysClose.AttachEvent("OnClick", btnCloseOnClick);

op_close.AttachEvent("OnClick", btnCloseOnClick);

textItemUserInfo.AttachEvent("OnClick",OnClickUserInfo);
iconUserInfo.AttachEvent("OnClick",OnClickUserInfo);
textItemItsRoom.AttachEvent("OnClick",OnClickItsRoom);
iconItsRoom.AttachEvent("OnClick",OnClickItsRoom);
textItemItsFans.AttachEvent("OnClick",OnClickItsFans);
iconItsFans.AttachEvent("OnClick",OnClickItsFans);
textItemBankAccount.AttachEvent("OnClick",OnClickBankAccount);
iconBankAccount.AttachEvent("OnClick",OnClickBankAccount);

function btnCloseOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_CLOSE, 0);
}

function OnClickUserInfo()
{
    imgInfoBk.visible = true;
	imgItsRoomBk.visible = false;
	Window.PostSkinMessage(SKIN_ON_CLICK_USERINFO, 0);
}

function OnClickItsRoom()
{
    imgInfoBk.visible = false;
	imgItsRoomBk.visible = true;
	Window.PostSkinMessage(SKIN_ON_CLICK_ITS_ROOM, 0);
}


function OnClickItsFans()
{
    imgInfoBk.visible = false;
	imgItsFansBk.visible = true;
	Window.PostSkinMessage(SKIN_ON_CLICK_ITS_FANS, 0);
}

function OnClickBankAccount()
{
    imgInfoBk.visible = false;
	imgBankAccountBk.visible = true;
	Window.PostSkinMessage(SKIN_ON_CLICK_BANKACCOUNT, 0);
}

function OnInit()
{   
    textTitle.visible = false;
	textTitle.text = "个人资料";
    // textTitle.fontWeight = 500;
	// textTitle.fontSize = 11;
    // textTitle.normalColor = 0xffffff;
    // textTitle.colorTransform = true;
	BankAccountDlgIsShow = 0;  //银行账号不显示
	ItsFansDlgIsShow = 0;  //TA的粉丝不显示
	OnSize(Window.width, Window.height);
}

function OnSize(cx, cy)
{	

	op_close.width = 111;
	op_close.height = 45;
	op_close.left = cx - op_close.width - 19;
	op_close.top = cy - 8 - op_close.height;
	
	// ImgUserInfoBk.visible = true;
	// ImgUserInfoBk.left = 0;
	// ImgUserInfoBk.top = 0;
	// ImgUserInfoBk.width = cx;
	// ImgUserInfoBk.height = cy;
	
	imgUserInfoDlgTopBk.left = 2;
	imgUserInfoDlgTopBk.top = 2;
	
	imgUserInfoDlgLeftBk.left = imgUserInfoDlgTopBk.left;
	imgUserInfoDlgLeftBk.top = imgUserInfoDlgTopBk.top + imgUserInfoDlgTopBk.height;
	
	imgUserInfoDlgBottomBk.left = imgUserInfoDlgLeftBk.left + imgUserInfoDlgLeftBk.width;
	imgUserInfoDlgBottomBk.top = cy - 2 - imgUserInfoDlgBottomBk.height;
	
	
	textTheTitle.left = 35;
	textTheTitle.top = 16;
	textTheTitle.width = textTheTitle.textWidth;
	textTheTitle.height = textTheTitle.textHeight;
	
	headBorder.left = imgUserInfoDlgTopBk.left + 18;
	headBorder.top = imgUserInfoDlgTopBk.top + imgUserInfoDlgTopBk.height + 10;
	headBorder.width = 102;
	headBorder.height = 102;
	

	//浏览器
	itemHtmlOtherUserInfo.left = imgUserInfoDlgLeftBk.left + imgUserInfoDlgLeftBk.width;
	itemHtmlOtherUserInfo.top = imgUserInfoDlgTopBk.top + imgUserInfoDlgTopBk.height;
	itemHtmlOtherUserInfo.width = cx - 2 - itemHtmlOtherUserInfo.left;
	itemHtmlOtherUserInfo.height = imgUserInfoDlgBottomBk.top - itemHtmlOtherUserInfo.top;
	
	UserHead.visible = true;
	UserHead.left = headBorder.left + 1;
	UserHead.top = headBorder.top + 1;
	UserHead.width = headBorder.width - 2;
	UserHead.height = headBorder.height - 2;
	
	imgInfoBk.visible = true;
	imgInfoBk.left = imgUserInfoDlgLeftBk.left;
	imgInfoBk.top = headBorder.top + headBorder.height + 37;
	imgInfoBk.width = 142;
	imgInfoBk.height = 20;
	iconUserInfo.visible = true;
	iconUserInfo.left = imgInfoBk.left + 35;
	iconUserInfo.top = imgInfoBk.top + 2;
	textItemUserInfo.visible = true;
	textItemUserInfo.left = iconUserInfo.left + iconUserInfo.width + 2;
	textItemUserInfo.top = imgInfoBk.top + 2;
	textItemUserInfo.width = 100;
	textItemUserInfo.height = 20;
	
	imgItsRoomBk.visible = false;
	imgItsRoomBk.left = imgInfoBk.left;
	imgItsRoomBk.top = imgInfoBk.top + imgInfoBk.height;
	imgItsRoomBk.width = imgInfoBk.width;
	imgItsRoomBk.height = imgInfoBk.height;
	iconItsRoom.visible = true;
	iconItsRoom.left = iconUserInfo.left;
	iconItsRoom.top = imgItsRoomBk.top + 2;
	textItemItsRoom.visible = true;
	textItemItsRoom.left = iconItsRoom.left + iconItsRoom.width + 2;
	textItemItsRoom.top = imgItsRoomBk.top + 2;
	textItemItsRoom.width = textItemUserInfo.width;
	textItemItsRoom.height = textItemUserInfo.height;	
	
	
	last_imgItsBk_left = imgItsRoomBk.left;
	last_imgItsBk_top = imgItsRoomBk.top;
	last_imgItsBk_height = imgItsRoomBk.height;
	last_imgItsBk_width = imgItsRoomBk.width;
	last_iconIts_left = iconItsRoom.left;
	last_textItem_widht = textItemItsRoom.width;
	last_textItem_height = textItemItsRoom.height;
	
	if(ItsFansDlgIsShow)
	{
		// 显示 TA的粉丝
		imgItsFansBk.visible = false;
		imgItsFansBk.left = last_imgItsBk_left;
		imgItsFansBk.top = last_imgItsBk_top + last_imgItsBk_height;
		imgItsFansBk.width = last_imgItsBk_width;
		imgItsFansBk.height = last_imgItsBk_height;
		iconItsFans.visible = true;
		iconItsFans.left = last_iconIts_left;
		iconItsFans.top = imgItsFansBk.top + 2;
		textItemItsFans.visible = true;
		textItemItsFans.left = iconItsFans.left + iconItsFans.width + 2;
		textItemItsFans.top = imgItsFansBk.top + 2;
		textItemItsFans.width = last_textItem_widht;
		textItemItsFans.height = last_textItem_height;	
		
		last_imgItsBk_left = imgItsFansBk.left;
		last_imgItsBk_top = imgItsFansBk.top;
		last_imgItsBk_height = imgItsFansBk.height;
		last_imgItsBk_width = imgItsFansBk.width;
		last_iconIts_left = iconItsFans.left;
		last_textItem_widht = textItemItsFans.width;
		last_textItem_height = textItemItsFans.height;
		
	}
	else
	{
		// 不显示 TA的粉丝
		imgItsFansBk.visible = false;
		iconItsFans.visible = false;
		textItemItsFans.visible = false;
	}
	
	if(BankAccountDlgIsShow)
	{
		// 显示 银行账号
		imgBankAccountBk.visible = false;
		imgBankAccountBk.left = last_imgItsBk_left;
		imgBankAccountBk.top = last_imgItsBk_top + last_imgItsBk_height;
		imgBankAccountBk.width = last_imgItsBk_width;
		imgBankAccountBk.height = last_imgItsBk_height;
		iconBankAccount.visible = true;
		iconBankAccount.left = last_iconIts_left;
		iconBankAccount.top = imgBankAccountBk.top + 2;
		textItemBankAccount.visible = true;
		textItemBankAccount.left = iconBankAccount.left + iconBankAccount.width + 2;
		textItemBankAccount.top = imgBankAccountBk.top + 2;
		textItemBankAccount.width = last_textItem_widht;
		textItemBankAccount.height = last_textItem_height;
		
		last_imgItsBk_left = imgBankAccountBk.left;
		last_imgItsBk_top = imgBankAccountBk.top;
		last_imgItsBk_height = imgBankAccountBk.height;
		last_imgItsBk_width = imgBankAccountBk.width;
		last_iconIts_left = iconBankAccount.left;
		last_textItem_widht = textItemBankAccount.width;
		last_textItem_height = textItemBankAccount.height;
	}
	else
	{
		//不显示  银行账号
		imgBankAccountBk.visible = false;
		iconBankAccount.visible = false;
		textItemBankAccount.visible = false;
	}

}

function OnNotify(code, code1)
{
	switch(code)
	{ 
	case SKIN_NOTIFY_BANKACCOUNT_DLG_SHOW:
		    {
				BankAccountDlgIsShow = code1;
				OnSize(Window.width, Window.height);
			}
            break;	
	case SKIN_NOTIFY_ITSFANS_DLG_SHOW:
		    {
				ItsFansDlgIsShow = code1;
				OnSize(Window.width, Window.height);
			}
            break;				
	default:
			break;
	}
	
}

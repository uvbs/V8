
var SKIN_ON_CLICK_CLOSE = 1;

Window.AttachEvent("OnInit", OnInit);
Window.AttachEvent("OnSize", OnSize);
Window.AttachEvent("OnNotify", OnNotify);

btnSysClose.AttachEvent("OnClick", btnCloseOnClick);

function btnCloseOnClick()
{
	Window.PostSkinMessage(SKIN_ON_CLICK_CLOSE, 0);
}

function OnInit()
{
    textTitle.visible = false;
	OnSize(Window.width, Window.height);
}

function OnSize(cx, cy)
{	
    imgTopBk.visible = true;
	imgTopBk.left = 2;
	imgTopBk.top = 2;
	imgTopBk.width = cx - 4;
	imgTopBk.height = 32;
	
	imgMidBk.left = 2;
	imgMidBk.top = imgTopBk.top + imgTopBk.height;
	imgMidBk.width = cx - 4;
	imgMidBk.height = cy - 2 - imgMidBk.top;

	textTheTitle.width = textTheTitle.textWidth;
	textTheTitle.height = textTheTitle.textHeight;
	textTheTitle.left = 10;
	textTheTitle.top = 8;
	
	itemHtmlRecommendRoom.left = imgMidBk.left;
	itemHtmlRecommendRoom.top = imgMidBk.top;
	itemHtmlRecommendRoom.width = imgMidBk.width;
	itemHtmlRecommendRoom.height = imgMidBk.height;
}

function OnNotify(code, code1)
{
	switch(code)
	{

    default:break;
	}
}

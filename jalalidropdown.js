/*
 * Jalali Dropdown - Update day dropdown numbers depend on year and month values for Jalali calendar.
 * Copyright (c) 2013 Sajjad Rad - www.sajjadrad.com
 * MIT Licence
 *
 ********************************************************************************
 *
 * Using some functions of JalaliJSCalendar library (GNU General Public License)
 * Copyright (c) 2008 Ali Farhadi (http://farhadi.ir/)
 */


 JalaliDate = {
	g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
};


JalaliDate.checkDate = function(j_y, j_m, j_d)
{
	return !(j_y < 0 || j_y > 32767 || j_m < 1 || j_m > 12 || j_d < 1 || j_d >
		(JalaliDate.j_days_in_month[j_m-1] + (j_m == 12 && !((j_y-979)%33%4))));
}

JalaliDate.updateDay = function(jd_y,jd_m,jd_d)
{
	var monthObj = document.getElementById(jd_m);
	var month = monthObj.options[monthObj.selectedIndex].value;
	var yearObj = document.getElementById(jd_y);
	var year = yearObj.options[yearObj.selectedIndex].value;
	var dayObj = document.getElementById(jd_d);
	//alert(year+"</br>"+month+"</br>"+JalaliDate.checkDate(year,month,30))
	if(parseInt(month)<7)
	{
		if(dayObj.length==29)
			 dayObj.options[dayObj.length] = new Option('30', '30');
		if(dayObj.length==30)
			 dayObj.options[dayObj.length] = new Option('31', '31');
	}
	else if(parseInt(month)<12)
	{
		if(dayObj.length==29)
			 dayObj.options[dayObj.length] = new Option('30', '30');
		if(dayObj.length==31)
			 dayObj.options[dayObj.length-1] = null;
	}
	else
	{
		if(JalaliDate.checkDate(year,month,30))
		{
			if(dayObj.length==29)
				dayObj.options[dayObj.length] = new Option('30', '30');
			if(dayObj.length==31)
				dayObj.options[dayObj.length-1] = null;
		}
		else
		{
			if(dayObj.length==31)
				dayObj.options[dayObj.length-1] = null;
			if(dayObj.length==30)
				dayObj.options[dayObj.length-1] = null;
		}
	}
}

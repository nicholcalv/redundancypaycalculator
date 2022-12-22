/*!
 * Redundancy Payment Calculator v1.0.2021 (http://www.redundancypaymentcalculator.com.au/)
 * Copyright 2018-2021 Yuquan Shi.
 * Please do not copy or use outside of this site without permission.
 */
 
window.onload=function(){
    document.getElementById("al_opt1").checked = true;
	$('input[type=radio][name=al_optradio]').change(function() {
		if (this.value == '1') {
			document.getElementById('aald_div').style.display = "block";
			document.getElementById('alsld_div').style.display = "block";
			document.getElementById('aalh_div').style.display = "none";
			document.getElementById('alslh_div').style.display = "none";
			document.getElementById('aalv_div').style.display = "none";
			document.getElementById('alslv_div').style.display = "none";
		}
		else if (this.value == '2') {
			document.getElementById('aald_div').style.display = "none";
			document.getElementById('alsld_div').style.display = "none";
			document.getElementById('aalh_div').style.display = "block";
			document.getElementById('alslh_div').style.display = "block";	
			document.getElementById('aalv_div').style.display = "none";
			document.getElementById('alslv_div').style.display = "none";
		}
		else if (this.value == '3') {
			document.getElementById('aald_div').style.display = "none";
			document.getElementById('alsld_div').style.display = "none";
			document.getElementById('aalh_div').style.display = "none";
			document.getElementById('alslh_div').style.display = "none";	
			document.getElementById('aalv_div').style.display = "block";
			document.getElementById('alslv_div').style.display = "block";
		}
		var v_al_opt = $('input[name=al_optradio]:checked').val();
		calrpc();
	});
	
    document.getElementById("rpe_opt1").checked = true;	
	$('input[type=radio][name=rpe_optradio]').change(function() {
		if (this.value == '1') {
			document.getElementById('rpep_div').style.display = "block";
			document.getElementById('rpen_div').style.display = "block";
			document.getElementById('rpep_div1').style.display = "none";
			document.getElementById('rpen_div1').style.display = "none";
			document.getElementById('rpep_div2').style.display = "none";
			document.getElementById('rpen_div2').style.display = "none";
		}
		else if (this.value == '2') {
			document.getElementById('rpep_div').style.display = "none";
			document.getElementById('rpen_div').style.display = "none";
			document.getElementById('rpep_div1').style.display = "block";
			document.getElementById('rpen_div1').style.display = "block";	
			document.getElementById('rpep_div2').style.display = "none";
			document.getElementById('rpen_div2').style.display = "none";
		}
		else if (this.value == '3') {
			document.getElementById('rpep_div').style.display = "none";
			document.getElementById('rpen_div').style.display = "none";
			document.getElementById('rpep_div1').style.display = "none";
			document.getElementById('rpen_div1').style.display = "none";	
			document.getElementById('rpep_div2').style.display = "block";
			document.getElementById('rpen_div2').style.display = "block";
		}
		var v_rpe_opt = $('input[name=rpe_optradio]:checked').val();
		calrpc();
	});
	
    document.getElementById("rnp_opt1").checked = true;	
	$('input[type=radio][name=rnp_optradio]').change(function() {
		var v_rnp_opt = $('input[name=rnp_optradio]:checked').val();
		if (v_rnp_opt == "1") {
			//show the tr if value is 1 (paying money)
			$('#pln_amt').show();
			$('#pln_sup').show();
			$('#pln_div').show();
		} else {
			//Hide the tr if value is 2
			$('#pln_amt').hide();
			$('#pln_sup').hide();
			$('#pln_div').hide();
		}		
		calrpc();
	});
	
    document.getElementById("ri_opt1").checked = true;	
	$('input[type=radio][name=ri_optradio]').change(function() {
		if (this.value == '1') {
			document.getElementById('ri_div').style.display = "block";
			document.getElementById('ri_div1').style.display = "none";
		}
		else if (this.value == '2') {
			document.getElementById('ri_div').style.display = "none";
			document.getElementById('ri_div1').style.display = "block";
		}
		var v_ri_opt = $('input[name=ri_optradio]:checked').val();
		calrpc();
	});
	
	document.getElementById('oCheck1').checked = false;
	document.getElementById('oCheck2').checked = false;
	document.getElementById('oCheck3').checked = false;
	$('#pln_amt_grp').hide();
	$('#ggh_amt_grp').hide();
	$('#sp_amt_grp').hide();
	
	// un-stripe table, since bootstrap striping doesn't work for filtered rows
	//$("table#Details").removeClass("table-striped");

	// now add stripes to alternating rows
	$("table#Details tbody#grp_section tr:visible").each( function(index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
    });

	$("table#Details tbody#rpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#netp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#oetp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#tax_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#nrpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#sup_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});	
	
	var current_date = new Date();
	var current_dd = String(current_date.getDate()).padStart(2, '0');
	var current_mm = String(current_date.getMonth() + 1).padStart(2, '0'); //January is 0!
	var current_yyyy = current_date.getFullYear();
	if (current_mm <= 5) {
		var fy_start_date = new Date(current_yyyy-1, 6, 1);
	} else {
		var fy_start_date = new Date(current_yyyy, 6, 1);
	}
	var current_fy_months = (current_date.getDate() - fy_start_date.getDate()) / 30 + current_date.getMonth() - fy_start_date.getMonth() + (12 * (current_date.getFullYear() - fy_start_date.getFullYear()));
	document.getElementById('salaryReceived').value  = Math.round(78000/12*current_fy_months);
}

$(function() { 
	$('[rel="clickoverB"]').clickover({ global_close: true, esc_close: true, placement: 'bottom'});
	$('[rel="clickover"]').clickover({ global_close: true, esc_close: true});
});

function mformat(n, currency) {
    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function isNumeric(num){
  num = "" + num; //coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num)) && !/^\s+|\s+$/g.test(num);
}

function round(number, precision) {
  var shift = function (number, precision) {
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, +precision)), -precision);
}

function calrpc() {
	// the tops of each tax band
	var v_tax_s1 = 18200;
	var v_tax_s2 = 45000;
	var v_tax_s3 = 120000;
	var v_tax_s4 = 180000;

	// the tax rates of each band
	var v_band1_rate = 0.00;
	var v_band2_rate = 0.19;
	var v_band3_rate = 0.325;
	var v_band4_rate = 0.37;
	var v_band5_rate = 0.45;

	// the tops of LITO
	var v_lito1_top = 37000;
	var v_lito2_top = 45000;
	var v_lito3_top = 66667;

	// the rates of LITO
	var v_lito1_rate = 700;
	var v_lito2_rate = 0.05;
	var v_lito3_rate = 0.015;
	var v_lito4_rate = 0;
	
	// the tops of Medicare Levy
	var v_mcl1_top = 23365;
	var v_mcl2_top = 29206;

	// the rates of Medicare Levy
	var v_mcl1_rate = 0;
	var v_mcl2_rate = 0.10;
	var v_mcl3_rate = 0.02;
	
	var v_aleave_taxrate = 0.32;
	var v_lsleave_taxrate = 0.32;
	var v_etp_uptaxrate_s1 = 0.32;
	var v_etp_uptaxrate_s2 = 0.47;
	var v_etp_ptaxrate_s1 = 0.17;
	var v_etp_ptaxrate_s2 = 0.47;
	var v_preservation_age = 60;
	var v_etp_taxfree_limit_base = 11591;
	var v_etp_taxfree_limit_yearly = 5797;
	var v_etp_cap_gr = 230000;
	var v_etp_cap_woi = 180000;

	if (document.getElementById('mageyear').value*1 > 66) {
		alert('The Mandatory Age of Retirement should be no more than 66!');
		document.getElementById('mageyear').value = 66;
		}
	if (document.getElementById('mageyear').value*1 < 40) {
		alert('The Mandatory Age of Retirement should be no less than 40!');
		document.getElementById('mageyear').value = 66;
		}
	var v_mageyear = document.getElementById('mageyear').value;
		
	if (document.getElementById('age').value*1 > 99) {
		alert('The Current Age should be no more than 99!');
		document.getElementById('age').value = 45;
		}
	if (document.getElementById('age').value*1 < 15) {
		alert('The Current Age should be no less than 15!');
		document.getElementById('age').value = 45;
		}
	var v_age = document.getElementById('age').value;
	
	if (document.getElementById('ce_years').value*1 > 60) {
		alert('The Years with Current Employer should be no more than 60!');
		document.getElementById('ce_years').value = 10;
		}
	if (document.getElementById('ce_years').value*1 < 1) {
		alert('The Years with Current Employer should be no less than 1!');
		document.getElementById('ce_years').value = 10;
		}
	var v_ce_years = document.getElementById('ce_years').value;
	
	if (document.getElementById('salary').value*1 > 9999999) {
		alert('The Annual Salary should be no more than $9,999,999!');
		document.getElementById('salary').value = 78000;
		document.getElementById('salaryReceived').value  = Math.round(78000/12*current_fy_months);
		}
	if (document.getElementById('salary').value*1 < 5000) {
		alert('The Annual Salary should be no less than $5000!');
		document.getElementById('salary').value = 78000;
		document.getElementById('salaryReceived').value  = Math.round(78000/12*current_fy_months);
		}
	var v_salary = document.getElementById('salary').value;
	
	if (document.getElementById('super').value*1 > 30) {
		alert('The Superannuation Guarantee Contribution Rate should be no more than 30%!');
		document.getElementById('super').value = 10.5;
		}
	if (document.getElementById('super').value*1 < 0) {
		alert('The Superannuation Guarantee Contribution Rate should be no less than 0%!');
		document.getElementById('super').value = 10.5;
		}
	var v_super_rate = document.getElementById('super').value;
	
	if (document.getElementById('hours').value*1 > 12) {
		alert('The Daily Working Hours should be no more than 12!');
		document.getElementById('hours').value = 7.6;
		}
	if (document.getElementById('hours').value*1 < 7) {
		alert('The Daily Working Hours should be no less than 7!');
		document.getElementById('hours').value = 7.6;
		}
	var v_hours = document.getElementById('hours').value;
	
	if (document.getElementById('days').value*1 > 360) {
		alert('The Annual Working Days should be no more than 360!');
		document.getElementById('days').value = 260;
		}
	if (document.getElementById('days').value*1 < 200) {
		alert('The Annual Working Days should be no less than 200!');
		document.getElementById('days').value = 260;
		}
	var v_days = document.getElementById('days').value;
	
	if (document.getElementById('time_fraction').value*1 > 100) {
		alert('The Time Fraction should be no more than 100%!');
		document.getElementById('time_fraction').value = 100;
		}
	if (document.getElementById('time_fraction').value*1 < 1) {
		alert('The Time Fraction should be no less than 1%!');
		document.getElementById('time_fraction').value = 100;
		}
	var v_time_fraction = document.getElementById('time_fraction').value;		
	var v_actual_salary = v_salary * v_time_fraction / 100;

	var v_p_age_1 = new Date(1960,7,1);
	var v_p_age_2 = new Date(1961,7,1);
	var v_p_age_3 = new Date(1962,7,1);
	var v_p_age_4 = new Date(1963,7,1);
	var v_p_age_5 = new Date(1964,7,1);
	
	var v_td = new Date();
	var v_tyear = v_td.getFullYear();
	var v_tmonth = v_td.getMonth();	
	var v_tday = v_td.getDate();
	var v_bd = new Date(v_tyear - v_age, v_tmonth, v_tday);

	// check Preservation age
	if ( v_bd < v_p_age_1 ) { 
		v_preservation_age = 55;
	} else if (v_bd < v_p_age_2) {
		v_preservation_age = 56;
	} else if (v_bd < v_p_age_3) {
		v_preservation_age = 57;
	} else if (v_bd < v_p_age_4) {
		v_preservation_age = 58;
	} else if (v_bd < v_p_age_5) {
		v_preservation_age = 59;
	} else if (v_bd >= v_p_age_5) {
		v_preservation_age = 60;
	}
	
	// Get Redundancy Pay Period
	var v_rpp = 10;
	if ( v_ce_years < 1 ) { 
		v_rpp = 0;
	} else if (v_ce_years < 2) {
		v_rpp = 4;
	} else if (v_ce_years < 3) {
		v_rpp = 6;
	} else if (v_ce_years < 4) {
		v_rpp = 7;
	} else if (v_ce_years < 5) {
		v_rpp = 8;
	} else if (v_ce_years < 6) {
		v_rpp = 10;
	} else if (v_ce_years < 7) {
		v_rpp = 11;
	} else if (v_ce_years < 8) {
		v_rpp = 13;
	} else if (v_ce_years < 9) {
		v_rpp = 14;
	} else if (v_ce_years < 10) {
		v_rpp = 16;
	} else if (v_ce_years >= 10) {
		v_rpp = 12;
	}
	document.getElementById('rppd').value = v_rpp;
	
	// Get Redundancy Notice Period
	var v_rnp = 4;
	if ( v_ce_years <= 1 ) { 
		v_rnp = 1;
	} else if (v_ce_years <= 3) {
		v_rnp = 2;
	} else if (v_ce_years <= 5) {
		v_rnp = 3;
	} else if (v_ce_years > 5) {
		v_rnp = 4;
	}
	
	// Check age for additional Redundancy Notice Period
	if ( v_age > 45 && v_ce_years >= 2 ) { 
		v_rnp = v_rnp + 1;
	}
		
	document.getElementById('rnpd').value = v_rnp;
	
	if (document.getElementById('aald').value*1 > 500) {
		alert('The Accrued Annual Leave should be no more than 500 days!');
		document.getElementById('aald').value = 20;
		}
	if (document.getElementById('aald').value*1 < 0) {
		alert('The Accrued Annual Leave should be no less than 0 day!');
		document.getElementById('aald').value = 20;
		}
	var v_aald = document.getElementById('aald').value;
	
	if (document.getElementById('alsld').value*1 > 500) {
		alert('The Accrued Long Service Leave should be no more than 500 days!');
		document.getElementById('alsld').value = 50;
		}
	if (document.getElementById('alsld').value*1 < 0) {
		alert('The Accrued Long Service Leave should be no less than 0 day!');
		document.getElementById('alsld').value = 50;
		}
	var v_alsld = document.getElementById('alsld').value;
	
	if (document.getElementById('aalh').value*1 > 5000) {
		alert('The Accrued Annual Leave should be no more than 5000 hours!');
		document.getElementById('aalh').value = 152;
		}
	if (document.getElementById('aalh').value*1 < 0) {
		alert('The Accrued Annual Leave should be no less than 0 hour!');
		document.getElementById('aalh').value = 152;
		}
	var v_aalh = document.getElementById('aalh').value;
	
	if (document.getElementById('alslh').value*1 > 5000) {
		alert('The Accrued Long Service Leave should be no more than 5000 hours!');
		document.getElementById('alslh').value = 380;
		}
	if (document.getElementById('alslh').value*1 < 0) {
		alert('The Accrued Long Service Leave should be no less than 0 hour!');
		document.getElementById('alslh').value = 380;
		}
	var v_alslh = document.getElementById('alslh').value;
	
	if (document.getElementById('orp').value*1 < 0) {
		alert('The Other Redundancy Payments should be no less than $0!');
		document.getElementById('orp').value = 0;
		}
	var v_orp = document.getElementById('orp').value;
	
	if (document.getElementById('pln_input').value*1 < 0) {
		alert('The Payments in Lieu of Notice should be no less than $0!');
		document.getElementById('pln_input').value = 0;
		}

	if (document.getElementById('ggh_input').value*1 < 0) {
		alert('The Gratuity or Golden Handshake should be no less than $0!');
		document.getElementById('ggh_input').value = 0;
		}
	var v_ggh = document.getElementById('ggh_input').value;

	if (document.getElementById('opetps_input').value*1 < 0) {
		alert('The Other Payments should be no less than $0!');
		document.getElementById('opetps_input').value = 0;
		}
	var v_opetps = document.getElementById('opetps_input').value;

	if (document.getElementById('salaryReceived').value*1 < 0) {
		alert('The Salary & Wages Received during the Income Year should be no less than $0!');
		document.getElementById('salaryReceived').value = 0;
		}
	if (document.getElementById('salaryReceived').value*1 >= v_salary*1) {
		alert('The Salary & Wages Received during the Income Year should be less than the Annual Salary (Equivalent Full-Time)!');
		document.getElementById('salaryReceived').value = 0;
		}
	var v_salaryReceived = document.getElementById('salaryReceived').value;
	
	if (document.getElementById('gow').value*1 > 9999999) {
		alert('The Gross Outstanding Wages should be no more than $9,999,999!');
		document.getElementById('gow').value = numeral(v_actual_salary/12).format('0');
		}
	if (document.getElementById('gow').value*1 < 0) {
		alert('The Gross Outstanding Wages should be no less than $0!');
		document.getElementById('gow').value = numeral(v_actual_salary/12).format('0');
		}
	if (document.getElementById('gow').value*1 > v_salary*1 - v_salaryReceived*1) {
		alert('The Gross Outstanding Wages should be no more than the Annual Salary minus the Salary & Wages Received during the Income Year!');
		document.getElementById('gow').value = 0;
		}
	var v_gow = document.getElementById('gow').value;
	
	v_al_opt = $('input[name=al_optradio]:checked').val();	
	var v_aalp = v_alslp = v_rppp = v_pln = v_rinc = v_nsnw = v_tgp = 0;
	v_nsnw = v_gow;
	
	if (v_al_opt == 1) {
		v_aalp = v_aald * v_salary * (1 / v_days) * v_time_fraction / 100;
		v_alslp = v_alsld * v_salary * (1 / v_days) * v_time_fraction / 100;
	} else if (v_al_opt == 2) {
		v_aalp = v_aalh * v_salary * (1 / v_days) * (v_time_fraction / 100) / (v_hours * (v_time_fraction / 100));
		v_alslp = v_alslh * v_salary * (1 / v_days) * (v_time_fraction / 100) / (v_hours * (v_time_fraction / 100));
	} else if (v_al_opt == 3) {
		v_aalp = document.getElementById('aalv').value * 1;
		v_alslp = document.getElementById('alslv').value * 1;
	}
	
	v_rpe_opt = $('input[name=rpe_optradio]:checked').val();
	var v_rppd = document.getElementById('rppd').value;
	var v_rnpd = document.getElementById('rnpd').value;
	
	if (document.getElementById('rppm').value*1 > 100) {
		alert('The Redundancy Pay Period should be no more than 100 weeks!');
		document.getElementById('rppm').value = 0;
		}
	if (document.getElementById('rppm').value*1 < 0) {
		alert('The Redundancy Pay Period should be no less than 0 week!');
		document.getElementById('rppm').value = 0;
		}
	var v_rppm = document.getElementById('rppm').value;
	var v_rppm_value = document.getElementById('rppm_value').value;
	
	if (document.getElementById('rnpm').value*1 > 100) {
		alert('The Redundancy Notice Period should be no more than 100 weeks!');
		document.getElementById('rnpm').value = 0;
		}
	if (document.getElementById('rnpm').value*1 < 0) {
		alert('The Redundancy Notice Period should be no less than 0 week!');
		document.getElementById('rnpm').value = 0;
		}
	var v_rnpm = document.getElementById('rnpm').value;
	var v_rnpm_value = document.getElementById('rnpm_value').value;
	var v_severance = document.getElementById('sp_input').value;
	
	if (v_rpe_opt == 1) {
		v_rppp = v_rppd * v_salary * (1 / v_days) * v_time_fraction / 100 * 5;
		v_pln = v_rnpd * v_salary * (1 / v_days) * v_time_fraction / 100 * 5;
	} else if (v_rpe_opt == 2) {
		v_rppp = v_rppm * v_salary * (1 / v_days) * v_time_fraction / 100 * 5;
		v_pln = v_rnpm * v_salary * (1 / v_days) * v_time_fraction / 100 * 5;
	} else if (v_rpe_opt == 3) {
		v_rppp = v_rppm_value * 1;
		v_pln = v_rnpm_value * 1;
	}
	
	v_rnp_opt = $('input[name=rnp_optradio]:checked').val();	
	if (v_rnp_opt == 1) {
		//show the tr if value is others
		$('#pln_amt').show();
		$('#pln_sup').show();
		$('#pln_div').show();
		$('#pln_input').val(v_pln);
	} else {
		//Hide the tr if value is others
		$('#pln_amt').hide();
		$('#pln_amt_grp').hide();
		$('#pln_sup').hide();
		$('#pln_div').hide();
		v_pln = 0;
		$('#pln_input').val(v_pln);
	}

	// now add stripes to alternating rows
	$("table#Details tbody#grp_section tr:visible").each( function(index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
    });

	$("table#Details tbody#rpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#netp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#oetp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#tax_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#nrpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#sup_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});	
	
	v_ri_opt = $('input[name=ri_optradio]:checked').val();
	
	if (document.getElementById('rid').value*1 > 5000000) {
		alert('The Redundancy Incentive should be no more than $5,000,000!');
		document.getElementById('rid').value = 0;
		}
	if (document.getElementById('rid').value*1 < 0) {
		alert('The Redundancy Incentive should be no less than $0!');
		document.getElementById('rid').value = 0;
		}
	var v_rid = document.getElementById('rid').value;
	
	if (document.getElementById('riw').value*1 > 260) {
		alert('The Redundancy Incentive should be no more than 260 weeks!');
		document.getElementById('riw').value = 0;
		}
	if (document.getElementById('riw').value*1 < 0) {
		alert('The Redundancy Incentive should be no less than 0 week!');
		document.getElementById('riw').value = 0;
		}
	var v_riw = document.getElementById('riw').value;
	
	if (v_ri_opt == 1) {
		v_rinc = v_rid;
	} else if (v_ri_opt == 2) {
		v_rinc = v_riw * v_salary * (1 / v_days) * v_time_fraction / 100 * 5;
	}
	
	var v_pln_checked = document.getElementById('oCheck1').checked;
	var v_gratuity_checked = document.getElementById('oCheck2').checked;
	var v_severance_checked = document.getElementById('oCheck3').checked;

	var v_grp = v_rppp*1 + v_rinc*1 + v_orp*1;
	var v_oetp = v_opetps*1;
	
	if (v_rnp_opt == 2)	{
		$('#pln_amt').hide();
		$('#pln_amt_grp').hide();
	} else {
		if (v_pln_checked) {
			v_grp = v_grp + v_pln*1;
			$('#pln_amt_grp').show();
			$('#pln_amt').hide();
		} else {
			v_oetp = v_oetp + v_pln*1;
			$('#pln_amt_grp').hide();
			$('#pln_amt').show();
		}
	}

	// now add stripes to alternating rows
	$("table#Details tbody#grp_section tr:visible").each( function(index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
    });

	$("table#Details tbody#rpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#netp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#oetp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#tax_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#nrpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#sup_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});	
	
	if (v_gratuity_checked) {
		v_grp = v_grp + v_ggh*1;
		$('#ggh_amt_grp').show();
		$('#ggh_amt').hide();
	} else {
		v_oetp = v_oetp + v_ggh*1;
		$('#ggh_amt_grp').hide();
		$('#ggh_amt').show();
	}

	if (v_severance_checked) {
		v_grp = v_grp + v_severance*1;
		$('#sp_amt_grp').show();
		$('#sp_amt').hide();
	} else {
		v_oetp = v_oetp + v_severance*1;
		$('#sp_amt_grp').hide();
		$('#sp_amt').show();
	}
	
	// now add stripes to alternating rows
	$("table#Details tbody#grp_section tr:visible").each( function(index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
    });

	$("table#Details tbody#rpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#netp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#oetp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#tax_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#nrpp_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});
	$("table#Details tbody#sup_section tr:visible").each(function (index, obj) {
        if (index % 2) {
            $(this).addClass('visible-even').removeClass('visible-odd');
        } else {
            $(this).addClass('visible-odd').removeClass('visible-even');
        }
	});	
	
	v_tgp = v_nsnw*1 + v_aalp*1 + v_alslp*1 + v_grp*1 + v_oetp*1;
	
	var v_nonetps = v_nsnw*1 + v_aalp*1 + v_alslp*1;
	
	var v_tfl = v_tfa = v_tetpa = 0;

	if (v_age >= v_mageyear) {
		v_tfl = 0;
	} else {
		v_tfl = v_etp_taxfree_limit_base + v_etp_taxfree_limit_yearly * Math.floor(v_ce_years*1);
	}
	
	v_tfa = Math.min(v_tfl, v_grp);
	
	v_tgrp = v_grp - v_tfa;

	var v_band1 = v_band2 = v_band3 = v_band4 = v_band5 = v_lito = v_mcl = 0;

	if(v_actual_salary > v_lito3_top) {
		v_lito = v_lito4_rate;
	}

	if(v_actual_salary > v_lito2_top && v_actual_salary <= v_lito3_top) {
		v_lito = v_lito1_rate - (v_lito2_top -	v_lito1_top) * v_lito2_rate - (v_actual_salary - v_lito2_top) * v_lito3_rate;
	}
	
	if(v_actual_salary > v_lito1_top && v_actual_salary <= v_lito2_top) {
		v_lito = v_lito1_rate - (v_actual_salary - v_lito1_top) * v_lito2_rate;
	}
	
	if(v_actual_salary <= v_lito1_top) {
		v_lito = v_lito1_rate;
	}
	
	if(v_actual_salary > v_mcl2_top) {
		v_mcl = v_actual_salary * v_mcl3_rate;
	}
	
	if(v_actual_salary > v_mcl1_top && v_actual_salary <= v_mcl2_top) {
		v_mcl = (v_actual_salary - v_mcl1_top) * v_mcl2_rate;
	}
	
	if(v_actual_salary <= v_mcl1_top) {
		v_mcl = v_mcl1_rate;
	}
	if(v_actual_salary > v_tax_s4) {
		v_band5 = (v_actual_salary - v_tax_s4) * v_band5_rate;
		v_actual_salary = v_tax_s4;
	}
	
	if(v_actual_salary > v_tax_s3) {
		v_band4 = (v_actual_salary - v_tax_s3) * v_band4_rate;
		v_actual_salary = v_tax_s3;
	}

	if(v_actual_salary > v_tax_s2) {
		v_band3 = (v_actual_salary - v_tax_s2) * v_band3_rate;
		v_actual_salary = v_tax_s2;
	}

	if(v_actual_salary > v_tax_s1) {
		v_band2 = (v_actual_salary - v_tax_s1) * v_band2_rate;
		v_actual_salary = v_tax_s1;
	}

	v_band1 = v_actual_salary * v_band1_rate;
	
	var v_tax_paid = v_band1 + v_band2 + v_band3 + v_band4 + v_band5;
	var v_total_tax = v_band1 + v_band2 + v_band3 + v_band4 + v_band5 - v_lito + v_mcl;
	v_actual_salary = v_salary * v_time_fraction / 100;
	var v_total_tax_nsnw = v_total_tax / v_actual_salary * v_nsnw;
	
	var v_ttgrp = v_ttoetp = v_taalp = v_talslp = v_total_tax = v_tnp = v_sgow = v_spln = v_total_super = 0;
	
	v_taalp = v_aalp * v_aleave_taxrate;
	v_talslp = v_alslp * v_lsleave_taxrate;
	
	if(v_age < v_preservation_age) {
		if(v_tgrp > v_etp_cap_gr) {
			v_ttgrp = v_etp_cap_gr * v_etp_uptaxrate_s1 + (v_tgrp - v_etp_cap_gr) * v_etp_uptaxrate_s2;
		} else {
			v_ttgrp = v_tgrp * v_etp_uptaxrate_s1;
		}
	} else if(v_age >= v_preservation_age) {
		if(v_tgrp > v_etp_cap_gr) {
			v_ttgrp = v_etp_cap_gr * v_etp_ptaxrate_s1 + (v_tgrp - v_etp_cap_gr) * v_etp_ptaxrate_s2;
		} else {
			v_ttgrp = v_tgrp * v_etp_ptaxrate_s1;
		}
	}
	
	var v_remainingetpcap = Math.max(v_etp_cap_gr - v_tgrp, 0);
	
	var v_othertaxincome = document.getElementById('salaryReceived').value*1 + v_nonetps*1;
	
	var v_calculatedwholeofincomecap = Math.max(v_etp_cap_woi - v_othertaxincome, 0);
	
	var v_capforemploymentterminationpayments = Math.min(v_remainingetpcap, v_calculatedwholeofincomecap);

	if(v_age < v_preservation_age) {
		if(v_oetp > v_capforemploymentterminationpayments) {
			v_ttoetp = v_capforemploymentterminationpayments * v_etp_uptaxrate_s1 + (v_oetp - v_capforemploymentterminationpayments) * v_etp_uptaxrate_s2;
		} else {
			v_ttoetp = v_oetp * v_etp_uptaxrate_s1;
		}
	} else if(v_age >= v_preservation_age) {
		if(v_oetp > v_capforemploymentterminationpayments) {
			v_ttoetp = v_capforemploymentterminationpayments * v_etp_ptaxrate_s1 + (v_oetp - v_capforemploymentterminationpayments) * v_etp_ptaxrate_s2;
		} else {
			v_ttoetp = v_oetp * v_etp_ptaxrate_s1;
		}
	}
	
	v_total_tax = v_total_tax_nsnw + v_taalp + v_talslp + v_ttgrp + v_ttoetp;
	v_tnp = v_tgp - v_total_tax;
	
	v_sgow = v_nsnw * v_super_rate / 100;
	v_spln = v_pln * v_super_rate / 100;
	v_total_super = v_sgow + v_spln;
	
	document.getElementById('tnsw').innerHTML = numeral(v_total_tax_nsnw).format('$0,0.00');
	document.getElementById('aalp').innerHTML = numeral(v_aalp).format('$0,0.00');
	document.getElementById('aalp1').innerHTML = numeral(v_aalp).format('$0,0.00');
	document.getElementById('alslp').innerHTML = numeral(v_alslp).format('$0,0.00');
	document.getElementById('alslp1').innerHTML = numeral(v_alslp).format('$0,0.00');
	document.getElementById('rppp').innerHTML = numeral(v_rppp).format('$0,0.00');
	document.getElementById('rppp1').innerHTML = numeral(v_rppp).format('$0,0.00');
	document.getElementById('rop').innerHTML = numeral(v_orp).format('$0,0.00');
	document.getElementById('rop1').innerHTML = numeral(v_orp).format('$0,0.00');
	document.getElementById('pln').innerHTML = numeral(v_pln).format('$0,0.00');
	document.getElementById('pln_grp').innerHTML = numeral(v_pln).format('$0,0.00');
	document.getElementById('rinc').innerHTML = numeral(v_rinc).format('$0,0.00');
	document.getElementById('rinc1').innerHTML = numeral(v_rinc).format('$0,0.00');
	document.getElementById('nsnw').innerHTML = numeral(v_nsnw).format('$0,0.00');
	document.getElementById('nsnw1').innerHTML = numeral(v_nsnw).format('$0,0.00');
	document.getElementById('tgp').innerHTML = numeral(v_tgp).format('$0,0.00');
	document.getElementById('tgp1').innerHTML = numeral(v_tgp).format('$0,0.00');
	document.getElementById('tgp2').innerHTML = numeral(v_tgp).format('$0,0.00');
	document.getElementById('ggh').innerHTML = numeral(v_ggh).format('$0,0.00');
	document.getElementById('ggh_grp').innerHTML = numeral(v_ggh).format('$0,0.00');
	document.getElementById('sp').innerHTML = numeral(v_severance).format('$0,0.00');
	document.getElementById('sp_grp').innerHTML = numeral(v_severance).format('$0,0.00');
	document.getElementById('opetps').innerHTML = numeral(v_opetps).format('$0,0.00');
	document.getElementById('oetp').innerHTML = numeral(v_oetp).format('$0,0.00');
	document.getElementById('tgrp').innerHTML = numeral(v_ttgrp).format('$0,0.00');
	document.getElementById('tfl').innerHTML = numeral(v_tfl).format('$0,0.00');
	document.getElementById('tfa').innerHTML = numeral(v_tfa).format('$0,0.00');
	document.getElementById('toetp').innerHTML = numeral(v_ttoetp).format('$0,0.00');
	document.getElementById('taalp').innerHTML = numeral(v_taalp).format('$0,0.00');
	document.getElementById('talslp').innerHTML = numeral(v_talslp).format('$0,0.00');
	document.getElementById('total_tax').innerHTML = numeral(v_total_tax).format('$0,0.00');
	document.getElementById('total_tax1').innerHTML = numeral(v_total_tax).format('$0,0.00');
	document.getElementById('total_tax2').innerHTML = numeral(v_total_tax).format('$0,0.00');
	document.getElementById('tnp').innerHTML = numeral(v_tnp).format('$0,0.00');
	document.getElementById('tnp1').innerHTML = numeral(v_tnp).format('$0,0.00');
	document.getElementById('sgow').innerHTML = numeral(v_sgow).format('$0,0.00');
	document.getElementById('spln').innerHTML = numeral(v_spln).format('$0,0.00');
	document.getElementById('total_super').innerHTML = numeral(v_total_super).format('$0,0.00');
	document.getElementById('total_super1').innerHTML = numeral(v_total_super).format('$0,0.00');
}
function myFunction () {

    //assigning user's input
    var empNo = document.getElementById("number").value;
    console.log(empNo);

    var empName = document.getElementById("name").value;
    console.log(empName);
    var department = document.getElementById("dep").value;
    console.log(department);
    var empHours = parseFloat(document.getElementById("hours").value);
    console.log(empHours);


    //assigning different parameters to each department
    if (department === "Sales"){
        var empHourlyRate  = 7.50;
        var taxedOver = 190;
        var taxRate = 0.2;
        var niRate = 0.14;
    }
    else if (department === "Marketing"){
        empHourlyRate = 8.50;
        taxedOver = 180;
        taxRate = 0.22;
        niRate = 0.15;
    }
    else if (department === "Operations"){
        empHourlyRate = 9.50;
        taxedOver = 180;
        taxRate = 0.2;
        niRate = 0.16;

    }
    console.log(empHourlyRate);

    //calculating gross Pay
    var grossPay = (empHourlyRate * empHours);
    console.log(grossPay);

    //checking if the gross pay is taxable
    var taxDeduction = 0;
    if (grossPay > taxedOver) {
        taxDeduction = ((grossPay - taxedOver) * taxRate);
    }
    console.log(taxDeduction);

    //calculating NI deduction and total deduction
    var niDeduction = (grossPay * niRate);
    console.log(niDeduction);
    var totalDeduction = (taxDeduction + niDeduction);
    console.log(totalDeduction);

    //calculating total pay
    var totalPay = (grossPay - totalDeduction);
    console.log(totalPay);

    //round the number to two decimal places
    var grossPayRound = (Math.round(grossPay * 100)/100);
    var totalDeductionRound = (Math.round(totalDeduction * 100)/100);

    //output
    document.getElementById("nameRes").innerHTML = ("Employee: " + empName);
    document.getElementById("numberRes").innerHTML = ("Employee No: " + empNo);
    document.getElementById("depRes").innerHTML = ("Department: " + department);
    document.getElementById("grossPayRes").innerHTML = ("Gross Pay = £" + grossPay.toFixed(2));
    document.getElementById("totalDeductionsRes").innerHTML = ("Total Deduction = £" + totalDeductionRound);
    document.getElementById("totalPayRes").innerHTML = ("Total Pay = £" + totalPay);


    /*
     document.write('Wage Slip created by &lt;insert your student number here&gt;<br />');

     document.write('============================<br />');

     document.write('Employee: ' + empName);
     document.write('<br />');
     document.write('Employee No: ' + empNo);
     document.write('<br />');
     document.write('Department: ' + department);
     document.write('<br />');
     document.write('<br />');
     document.write('Gross Pay = £' + grossPay)
     document.write('<br />');
     document.write('Total Deductions = £' + totalDeduction);
     document.write('<br />');
     document.write('<br />');
     document.write('Total Pay = £' + totalPay);
     */
}/**
 * Created by WOSJ1_17 on 12/12/2017.
 */

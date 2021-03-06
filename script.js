document.getElementById('output1').style.visibility = 'hidden';
document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('output3').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
        if(lbs <= 0){
            document.getElementById('output1').style.visibility = 'hidden';
            document.getElementById('output2').style.visibility = 'hidden';
            document.getElementById('output3').style.visibility = 'hidden';
        } 
        else{
            document.getElementById('output1').style.visibility = 'visible';
            document.getElementById('output2').style.visibility = 'visible';
            document.getElementById('output3').style.visibility = 'visible';   
            document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
            document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(2);
            document.getElementById('ozOutput').innerHTML = (lbs*16.0).toFixed(2);
        }
})
document.getElementById('output4').style.visibility = 'hidden';
document.getElementById('output5').style.visibility = 'hidden';
document.getElementById('output6').style.visibility = 'hidden';
document.getElementById('gramInput').addEventListener('input', function(e){
    let gram = e.target.value;
        if(gram <= 0){
            document.getElementById('output4').style.visibility = 'hidden';
            document.getElementById('output5').style.visibility = 'hidden';
            document.getElementById('output6').style.visibility = 'hidden';
        }
        else{
            document.getElementById('output4').style.visibility = 'visible';
            document.getElementById('output5').style.visibility = 'visible';
            document.getElementById('output6').style.visibility = 'visible';   
            document.getElementById('lbsOutput2').innerHTML = (gram/453.59237).toFixed(2);
            document.getElementById('kgOutput2').innerHTML = (gram/1000.0).toFixed(2);
            document.getElementById('ozOutput2').innerHTML = (gram/28.34952).toFixed(2);
        }
})    
document.getElementById('output7').style.visibility = 'hidden';
document.getElementById('output8').style.visibility = 'hidden';
document.getElementById('output9').style.visibility = 'hidden';
document.getElementById('kgInput').addEventListener('input', function(e){
    let kg = e.target.value;
        if(kg <= 0){
            document.getElementById('output7').style.visibility = 'hidden';
            document.getElementById('output8').style.visibility = 'hidden';
            document.getElementById('output9').style.visibility = 'hidden';
        }
        else{
            document.getElementById('output7').style.visibility = 'visible';
            document.getElementById('output8').style.visibility = 'visible';
            document.getElementById('output9').style.visibility = 'visible';   
            document.getElementById('lbsOutput3').innerHTML = (kg/0.45359237).toFixed(2);
            document.getElementById('gramsOutput3').innerHTML = (kg*1000.0).toFixed(2);
            document.getElementById('ozOutput3').innerHTML = (kg/0.02834952).toFixed(2);
        }
})      
document.getElementById('output10').style.visibility = 'hidden';
document.getElementById('output11').style.visibility = 'hidden';
document.getElementById('output12').style.visibility = 'hidden';
document.getElementById('ozInput').addEventListener('input', function(e){
    let oz = e.target.value;
        if(oz <= 0){
            document.getElementById('output10').style.visibility = 'hidden';
            document.getElementById('output11').style.visibility = 'hidden';
            document.getElementById('output12').style.visibility = 'hidden';
        }
        else{
            document.getElementById('output10').style.visibility = 'visible';
            document.getElementById('output11').style.visibility = 'visible';
            document.getElementById('output12').style.visibility = 'visible';   
            document.getElementById('lbsOutput4').innerHTML = (oz/16.0).toFixed(2);
            document.getElementById('gramsOutput4').innerHTML = (oz*453.59237).toFixed(2);
            document.getElementById('kgOutput4').innerHTML = (oz*0.02834952).toFixed(2);
        }
}) 

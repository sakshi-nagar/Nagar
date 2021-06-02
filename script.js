function calculate()
            {
                p = document.getElementById("p").value;
                n = document.getElementById("t").value;
                r = document.getElementById("r").value;
                compute = document.getElementById("compute");
                
                compute.innerHTML = "The interest is " + (p*r*t/100);
            }

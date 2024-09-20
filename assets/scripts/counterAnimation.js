const counters = document.querySelectorAll(".number-informational");

        counters.forEach(counter => {
            let initial_count = 0;
            const final_count = counter.dataset.count;

            const counting = setInterval(updateCounting, 1)

            function updateCounting(){

                if(initial_count < 1000){
                    initial_count += 1;
                    counter.innerText = initial_count;
                }
                if(initial_count >= 1000){
                    initial_count += 500;
                    counter.innerText = (initial_count / 10000).toFixed(0) +',000' +',000' ;
                }
               

                if(initial_count == final_count){
                    clearInterval(counting);
                }
        
            }
        });
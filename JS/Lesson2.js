var rightSound = new Audio("../sound/right_answer.mp3");
var wrongSound = new Audio("../sound/wrong_answer.mp3");

var vueLsTwo = new Vue({
    el: '#lesson-2',
    data(){
        return{
            //screen 1
            displayScreenOne: 0,
            //screen 2
            displayScreenTwo: 1,
            //screen 3
            displayScreenThree: 1,
            //screen 4
            displayScreenFour: 1,
            //screen 5
            displayScreenFive: 1,
            //screen 6
            displayScreenSix: 1,
            inputAnsSix: '',
            ansSix: 35,
            saveInput: '',
            //screen 7
            displayScreenSeven: 1,
            inputAnsSeven: '',
            ansSeven: 11,
            saveInputSeven: '',
            //screen 8
            displayScreenEight: 1,
            inputAnsEight: '',
            ansEight: 133,
            saveInputEight: '',
            //success
            displayScreenSuccess: 1,
        }
    },
    methods:{
        //screen 1
        onClickWrongAns2(){
            $('#wrong-answer-2').addClass('test');
            setTimeout(function(){$('#wrong-answer-2').removeClass('test');},1000);
        },
        onClickWrongAns1(){
            $('#wrong-answer-1').addClass('test');
            setTimeout(function(){$('#wrong-answer-1').removeClass('test');},1000);
        },
        onClickRightAns(){
            $('#right-ans').addClass('background-right-ans');
            setTimeout(function(){$('#right-ans').removeClass('background-right-ans');},1000);
            setTimeout(()=>{
                this.displayScreenOne = 1;
                this.displayScreenTwo = 0;
            },800);
        },
        //screen 2
        wrongAnsScreen2(){
            $('#wrong-screen-2').addClass('test'); 
            setTimeout(function(){$('#wrong-screen-2').removeClass('test');},1000); 
        },
        rightAnsScreen2(){
            $('#right-screen-2').addClass('background-right-ans');
            setTimeout(function(){$('#right-screen-2').removeClass('background-right-ans');},1000);
            setTimeout(()=>{
                this.displayScreenTwo = 1;
                this.displayScreenThree = 0;
            },800);
        },
        //screen 3
        wrongAnsScreen3(){
            $('#wrong-screen-3').addClass('test'); 
            setTimeout(function(){$('#wrong-screen-3').removeClass('test');},1000); 
        },
        rightAnsScreen3(){
            $('#right-screen-3').addClass('background-right-ans');
            setTimeout(function(){$('#right-screen-3').removeClass('background-right-ans');},1000);
            setTimeout(()=>{
                this.displayScreenThree = 1;
                this.displayScreenFour = 0;
            },800);
        },
        //screen 4
        wrongAnsScreen4(){
            $('#wrong-screen-4').addClass('test'); 
            setTimeout(function(){$('#wrong-screen-4').removeClass('test');},1000); 
        },
        rightAnsScreen4(){
            $('#right-screen-4').addClass('background-right-ans');
            setTimeout(function(){$('#right-screen-4').removeClass('background-right-ans');},1000);
            setTimeout(()=>{
                this.displayScreenFive = 0;
                this.displayScreenFour = 1;
            },800)
        },
        //screen 5
        wrongAnsScreen5(){
            $('#wrong-screen-5').addClass('test'); 
            setTimeout(function(){$('#wrong-screen-5').removeClass('test');},1000); 
        },
        rightAnsScreen5(){
            $('#right-screen-5').addClass('background-right-ans');
            setTimeout(function(){$('#right-screen-5').removeClass('background-right-ans');},1000);
            setTimeout(()=>{
                this.displayScreenFive = 1;
                this.displayScreenSix = 0;
            },800)
        },
        //screen 6
        handleInputPlayer(){
            this.saveInput = this.inputAnsSix;
        },
        handleClickDone(){
            if(this.saveInput == this.ansSix){
                $('#btn-done-six').addClass('background-right-ans'); 
                rightSound.play();
                setTimeout(function(){$('#btn-done-six').removeClass('background-right-ans');},1000);
                setTimeout(()=>{
                    this.displayScreenSix = 1;
                    this.displayScreenSeven = 0;
                },800) 
            }
            else{
                $('#btn-done-six').addClass('test'); 
                setTimeout(function(){$('#btn-done-six').removeClass('test');},1000); 
                wrongSound.play();
            }
        },
        //screen 7
        handleInputPlayerSeven(){
            this.saveInputSeven = this.inputAnsSeven;
        },
        handleClickDoneSeven(){
            if(this.saveInputSeven == this.ansSeven){
                $('#btn-done-seven').addClass('background-right-ans'); 
                rightSound.play();
                setTimeout(function(){$('#btn-done-seven').removeClass('background-right-ans');},1000);
                setTimeout(()=>{
                    this.displayScreenEight = 0;
                    this.displayScreenSeven = 1;
                },800)
            }
            else{
                $('#btn-done-seven').addClass('test'); 
                setTimeout(function(){$('#btn-done-seven').removeClass('test');},1000); 
                wrongSound.play();
            }
        },
        //screen 8
        handleInputPlayerEight(){
            this.saveInputEight = this.inputAnsEight;
        },
        handleClickDoneEight(){
            if(this.saveInputEight == this.ansEight){
                $('#btn-done-eight').addClass('background-right-ans'); 
                rightSound.play();
                setTimeout(function(){$('#btn-done-eight').removeClass('background-right-ans');},1000);
                setTimeout(()=>{
                    this.displayScreenEight = 1;
                    this.displayScreenSuccess = 0;
                },800)
            }
            else{
                $('#btn-done-eight').addClass('test'); 
                setTimeout(function(){$('#btn-done-eight').removeClass('test');},1000); 
                wrongSound.play();
            }
        }
    }
})
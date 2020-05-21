var rightSound = new Audio("../sound/right_answer.mp3");
var wrongSound = new Audio("../sound/wrong_answer.mp3");

var vueLsThree = new Vue({
    el: '#lesson-3',
    data(){
        return{
            //screen 1
            numerator_inp: '',
            denominator_inp:'',
            numerator_save:'',
            denominator_save:'',
            numerator_ans: 1,
            denominator_ans: 4,
            checkNextScreen: 0,
            //screen 2
            numerator_inp_two: '',
            denominator_inp_two:'',
            numerator_save_two:'',
            denominator_save_two:'',
            numerator_ans_two: 4,
            denominator_ans_two: 5,
            checkSuccess: 0,
            checkNextScreenTwo :0
        }
    },
    methods:{
        //screen 1
        inputNumerator(){
            this.numerator_save = this.numerator_inp;
        },
        inputDenominator(){
            this.denominator_save = this.denominator_inp;
        },
        checkPass(){
            if(this.numerator_save == this.numerator_ans && this.denominator_save == this.denominator_ans){
                $('#btn-done-wrong').addClass('background-right-ans');
                rightSound.play();
                setTimeout(function(){$('#btn-done-wrong').removeClass('background-right-ans');},1300);
                setTimeout(()=>{
                    this.checkNextScreenTwo = 1;
                    this.checkNextScreen = 1;
                },800)
            }
            else{
                $('#btn-done-wrong').addClass('test');
                setTimeout(function(){$('#btn-done-wrong').removeClass('test');},1300);
                wrongSound.play();
            }
        },
        //screen 2
        inputNumeratorTwo(){
            this.numerator_save_two = this.numerator_inp_two;
        },
        inputDenominatorTwo(){
            this.denominator_save_two = this.denominator_inp_two;
        },
        checkPassTwo(){
            if(this.numerator_save_two == this.numerator_ans_two && this.denominator_save_two == this.denominator_ans_two){
                $('#btn-done-wrong-2').addClass('background-right-ans');
                rightSound.play();
                setTimeout(function(){$('#btn-done-wrong-2').removeClass('background-right-ans');},1300);
                setTimeout(()=>{
                    this.checkSuccess = 1;
                    this.checkNextScreenTwo = 0;
                },800)
            }
            else{
                $('#btn-done-wrong-2').addClass('test');
                setTimeout(function(){$('#btn-done-wrong-2').removeClass('test');},1300);
                wrongSound.play();
            }
        }
    },
})

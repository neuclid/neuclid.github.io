//To help make increments, we make global variables. Or NOT.


//Using "instance mode" for multiple draws
//Also to avoid referring to global space
//Mainly to help put everything into a container

let spacing = 20;
let dim1=200;
let dim2=700;
//let color_left='#006064';
//let color_right='#006064';
//let color_top='#303f9f';
//let color_bottom='#303f9f';

let color_left='#ffeb3b';
let color_right='#ffeb3b';
let color_top='#ff5722';
let color_bottom='#ff5722';

let bg_left='#263238';
let bg_right='#263238';
let bg_top='#263238';
let bg_bottom='#263238';


var print_10_left  = function(anim) {
    var x = 0;
    var y = dim2;
    //var spacing = 40;
    var rand_prob = anim.random(0.2,0.8);
   
    anim.setup = function(){
        anim.createCanvas(dim1,dim2);
        anim.background(bg_left);
    };

    anim.draw = function(){
        anim.stroke(color_left);
        if (anim.random(1)<rand_prob){
           anim.line(x,y,x-spacing,y-spacing);
        }
        else{
            anim.line(x,y-spacing,x-spacing,y);
        }
        if (y<0){ //"width" is created in createCanvas() ??
            y=dim2;
            x=x+spacing;
        }
        else{
            y=y-spacing;
        };
    }
};

var print_10_right  = function(anim) {
    var x = dim1;
    var y = 0;
    //var spacing = 40;
    var rand_prob = anim.random(0.2,0.8);
   
    anim.setup = function(){
        anim.createCanvas(dim1,dim2);
        anim.background(bg_right);
    };

    anim.draw = function(){
        anim.stroke(color_right);
        if (anim.random(1)<rand_prob){
           anim.line(x,y,x-spacing,y+spacing);
        }
        else{
            anim.line(x,y+spacing,x-spacing,y);
        }
        if (y>dim2){ //"width" is created in createCanvas() ??
            y=0;
            x=x-spacing;
        }
        else{
            y=y+spacing;
        };
    }
};


var print_10_top  = function(anim) {
    var x = 0;
    var y = 0;
    //var spacing = 40;
    var rand_prob = anim.random(0.2,0.8);
   
    anim.setup = function(){
        anim.createCanvas(dim2,dim1);
        anim.background(bg_top);
    };

    anim.draw = function(){
        anim.stroke(color_top);
        if (anim.random(1)<rand_prob){
           anim.line(x,y,x+spacing,y+spacing);
        }
        else{
            anim.line(x,y+spacing,x+spacing,y);
        }
        if (x>anim.width){ //"width" is created in createCanvas() ??
            x=0;
            y=y+spacing;
        }
        else{
            x=x+spacing;
        };
    }
};

var print_10_bottom  = function(anim) {
    var x = dim2;
    var y = dim1;
    //var spacing = 40;
    var rand_prob = anim.random(0.2,0.8);
   
    anim.setup = function(){
        anim.createCanvas(dim2,dim1);
        anim.background(bg_bottom);
    };

    anim.draw = function(){
        anim.stroke(color_bottom);
        if (anim.random(1)<rand_prob){
           anim.line(x,y,x-spacing,y-spacing);
        }
        else{
            anim.line(x,y-spacing,x-spacing,y);
        }
        if (x<0){ //"width" is created in createCanvas() ??
            x=dim2;
            y=y-spacing;
        }
        else{
            x=x-spacing;
        };
    }
};


var p1 = new p5(print_10_left, 'anim-box-left');
var p2 = new p5(print_10_right, 'anim-box-right');
var p3 = new p5(print_10_top, 'anim-box-top');
var p4 = new p5(print_10_bottom, 'anim-box-bottom');


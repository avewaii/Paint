const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


document.body.onload = function(e) { //onload page == pencil 
    let pencil = document.querySelector('.pencil');
    pencil.classList.add('selected');
    tools.drawPencil();
}

document.querySelector('.tools').addEventListener('click', function(e) {
    let chosenTool = e.target.closest('li');
    console.log(chosenTool);

    document.querySelectorAll('li').forEach( function (li) {
        li.style.backgroundColor = '';

        if (li.classList.contains('selected')) {

            li.classList.remove('selected');

        }
    });
    chosenTool.classList.add('selected');
});

let figuresForDrawing = []; //сохраняем данные о нарисованных фигурах

function redrawing() {
    ctx.clearRect(0, 0, 520, 520);
    figuresForDrawing.forEach(item => figureDrawer[item.type](...item.data));
}

function color() {
    return document.querySelector('#color').value;
}

function width() {
    return document.querySelector('.range').value;
}


const figureDrawer = {
    circle (centerX, centerY, radius, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); 
        ctx.closePath();
        ctx.stroke(); 
    },
    rectangle (startX, startY, widthRect, heightRect, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.strokeRect(startX, startY, widthRect, heightRect);
    },
    line(startX1, startY1, endX2, endY2, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(startX1, startY1);
        ctx.lineTo(endX2, endY2);
        ctx.closePath();
        ctx.stroke();
    },
}

let tools = {
    drawCircle() {
        alert('circle');
        let centerX, centerY;
        let radius;

        canvas.onmousedown = function(e) {    
            centerX = e.offsetX; //координаты центра круга
            centerY = e.offsetY;
        }; 
        
        canvas.onmousemove = function(e) {
            if (e.which == 1) {
                let x1 = e.offsetX; //координаты второго нажатия (радиус)
                let y1 = e.offsetY;

                radius = Math.pow(Math.pow(x1 - centerX, 2) + Math.pow(y1 - centerY, 2), 0.5);
                redrawing();
                figureDrawer.circle(centerX, centerY, radius, color(), width());
            }     
        };   

        canvas.onmouseup = function(e) {
            figuresForDrawing.push({
                type: 'circle',
                data: [centerX, centerY, radius, color(), width()]
            });
            redrawing();
        };
    },
    drawRectangle() {
        alert('rectangle');
    
        let startX, startY;
        let widthRect, heightRect;
    
        canvas.onmousedown = function (e) {
            startX = e.offsetX;
            startY = e.offsetY;
        } //нашли координаты верхнего угла прямоугольника
    
        canvas.onmousemove = function (e) {   
            if(e.which == 1) {
                widthRect = e.offsetX - startX;
                heightRect = e.offsetY - startY;
    
                redrawing();
                figureDrawer.rectangle(startX, startY, widthRect, heightRect, color(), width());
            }
        }
    
        canvas.onmouseup = function (e) {
            figuresForDrawing.push({
                type: 'rectangle',
                data: [startX, startY, widthRect, heightRect, color(), width()]
            })
            radius = null;
            redrawing();
        }
    },
    drawLine() {
        alert('line');
    
        let startX1, startY1;
        let endX2, endY2;
    
        canvas.onmousedown = function(e) {
            startX1 = e.offsetX;
            startY1 = e.offsetY;
        }; //получили координаты первой точки
    
        canvas.onmousemove = function(e) {
            if(e.which == 1){
                endX2 = e.offsetX;
                endY2 = e.offsetY;
                redrawing();
                figureDrawer.line(startX1, startY1, endX2, endY2, color(), width());
            }
        };
    
        canvas.onmouseup = function(e) {
            if (e.which == 1) {
                figuresForDrawing.push({
                    type: 'line',
                    data: [startX1, startY1, endX2, endY2, color(), width()]
                });
                startX = null;
                startY = null;
                redrawing();
            }
        };
    },
    drawPencil() {
        alert('pencil');
        let curX, curY;

        canvas.onmousedown = function(e){ 
            curX = e.offsetX;
            curY = e.offsetY;
        };

        canvas.onmousemove = function(e){
            if (curX && curY) {
                figuresForDrawing.push({
                    type: 'line',
                    data: [curX, curY, e.offsetX, e.offsetY]
                });
                curX = e.offsetX;
                curY = e.offsetY;
                redrawing();
            }
        };

        canvas.onmouseup = function(e) {   
            curX = null;
            curY = null;
        };
    },
    refresh () {
        alert('refresh');
        ctx.clearRect(0, 0, 520, 520);
    }
};

document.querySelector('.pencil').addEventListener('click', tools.drawPencil);
document.querySelector('.drawLine').addEventListener('click', tools.drawLine);
document.querySelector('.drawCircle').addEventListener('click', tools.drawCircle);
document.querySelector('.drawRectangle').addEventListener('click', tools.drawRectangle);
document.querySelector('.eraser').addEventListener('click', tools.drawEraser);
document.querySelector('.refreshButton').addEventListener('click', tools.refresh);


function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("#caed1a");
}
function clearCanvas(){
    background("#caed1a")
}
function updataCanvas(){
    background("white")
    random_number=Math.floor(( Math.random))* quick_draw_data_set.length)+1);
    console.log(quick_draw_data_set[random_number]);
    sketch=quick_draw_data_set[random_number];
    document.getElementById("sktch_name").innerHTML='Sketch To be Draw:'=sketch;
}
function draw(){
    check_sketch()
    if(draw_sketch==sketch)
{
    answer_holder="set"
    score++;
    document.getElementById("score").innerHTML='score:'=score;
}

}
function check_sketch()
{
timer_counnter++;
document.getElementById("time").innerHTML='Timer:'+timer_counnter;
console.log(timer_counter)
if(timer_counter>400)
{
    timer_counter=0;
    timer_check="completed"
}
if(timer_check=="completed" answer_holder=="set")
{
    timer_check="";
    answer_holder="";
    updataCanvas();
}
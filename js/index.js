function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}

function recalculate() {
    let angle = parseFloat(document.getElementById("angle").value);
    let velocity = parseFloat(document.getElementById("speed").value);

    console.log(angle)

    var g = 9.8;

    let angle_radians = angle * Math.PI / 180;
    let v_0y = velocity * Math.sin(angle_radians);
    let v_0x = velocity * Math.cos(angle_radians);

    let t_up = v_0y / g;
    let t_full = 2 * t_up;

    let height_max = v_0y * t_up - g * (t_up ** 2) / 2;
    let length_max = v_0x * t_full;

    console.log(t_full, length_max, height_max);

    document.getElementById("time").innerHTML = t_full.toFixed(2) + " с";
    document.getElementById("height").innerHTML = height_max.toFixed(2) + " м";
    document.getElementById("length").innerHTML = length_max.toFixed(2) + " м";

}

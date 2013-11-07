#pragma strict

function Start () {

}

var mouse_down:boolean = false;
var msk:LayerMask;
function Update () {
	msk = gameObject.layer;
	
	if(mouse_down) {
		var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit:RaycastHit;
		if (Physics.Raycast (ray, hit, 1000, 13)) {
			gameObject.transform.position = hit.point;
			gameObject.transform.position.y += .5 * gameObject.transform.localScale.x;
		}
	}
}

function OnMouseOver () {
	renderer.material.color = Color(0.1, 1, 1);
}
function OnMouseExit() {
	renderer.material.color = Color(1, 1, 1);
}

function OnMouseDown() {
	gameObject.layer = 13;
	mouse_down = true;
	gameObject.collider.enabled = false;
}
function OnMouseUp() {
	gameObject.layer = 0;
	mouse_down = false;
	gameObject.collider.enabled = true;
}
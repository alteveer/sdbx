#pragma strict

var target:GameObject;
var offset:Vector3;
var target_offset:Vector3;

function Start () {
	if(target == null) {
		target = GameObject.Find("/player");
	}
	
	if(offset == null) {
		offset = Vector3(0, 30, 0);
	}
	if(target_offset == null) {
		offset = Vector3(0, 10, 10);
	}
}

function Update () {
	transform.position = target.transform.position + offset;
	transform.LookAt(target.transform.position + target_offset);
	
}
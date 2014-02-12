#pragma strict

function Start () {

}

var rotation_speed:float = 1;
var sin_angle:float;

function FixedUpdate () {
	
	//Mathf.Deg2Rad * this.gameObject.transform.rotation.eulerAngles.y)) < 1) {
	
	if(Input.GetKey(KeyCode.LeftArrow)) {
		transform.Rotate(0, 0, -rotation_speed);
	}
	if(Input.GetKey(KeyCode.RightArrow)) {
		transform.Rotate(0, 0, rotation_speed);
	}
		
	if(transform.rotation.eulerAngles.y < 270 && transform.rotation.eulerAngles.y > 179) {
		transform.rotation = Quaternion.Euler(270, 270, 0);	
	}
	if(transform.rotation.eulerAngles.y > 90 && transform.rotation.eulerAngles.y < 180) {
		transform.rotation = Quaternion.Euler(270, 90, 0);	
	}
	
	sin_angle = Mathf.Sin(Mathf.Deg2Rad * this.gameObject.transform.rotation.eulerAngles.y);
	rigidbody.drag = Mathf.Pow(Mathf.Abs(sin_angle), 4.0f);
	
}

function OnGUI() {
	//GUILayout.Label(Mathf.Sin(Mathf.Deg2Rad * this.gameObject.transform.rotation.eulerAngles.y).ToString("0.0"));
	GUILayout.Label(sin_angle.ToString("0.0"));
	GUILayout.Label(rigidbody.drag.ToString("0.0"));
	//GUILayout.Label((Mathf.Rad2Deg * transform.localRotation.eulerAngles).ToString("0.0"));
}
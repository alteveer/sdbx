#pragma strict

var player_wheel:WheelCollider;

function Start () {
	player_wheel = GameObject.Find("player_wheel").GetComponent(WheelCollider);	
}

var rotation_speed:float = 1;
var sin_angle:float;
var jump_force:float;

function FixedUpdate () {
	
	//Mathf.Deg2Rad * this.gameObject.transform.rotation.eulerAngles.y)) < 1) {
	
	if(Input.GetKey(KeyCode.LeftArrow)) {
		transform.Rotate(0, 0, -rotation_speed);
	}
	if(Input.GetKey(KeyCode.RightArrow)) {
		transform.Rotate(0, 0, rotation_speed);
	}

	sin_angle = Mathf.Sin(Mathf.Deg2Rad * this.gameObject.transform.rotation.eulerAngles.y);

	if(player_wheel.isGrounded) {
	
		if(transform.rotation.eulerAngles.y < 270 && transform.rotation.eulerAngles.y > 179) {
			transform.rotation = Quaternion.Euler(270, 270, 0);	
		}
		if(transform.rotation.eulerAngles.y > 90 && transform.rotation.eulerAngles.y < 180) {
			transform.rotation = Quaternion.Euler(270, 90, 0);	
		}
		
		if(Input.GetKeyDown(KeyCode.Space)) {
			rigidbody.AddForce(Vector3.up * jump_force, ForceMode.Impulse);
		}
		
		rigidbody.drag = Mathf.Pow(Mathf.Abs(sin_angle), 4.0f);
	} else {
		
	}
}

function OnGUI() {
	//GUILayout.Label(Mathf.Sin(Mathf.Deg2Rad * this.gameObject.transform.rotation.eulerAngles.y).ToString("0.0"));
	//GUILayout.Label(sin_angle.ToString("0.0"));
	//GUILayout.Label(rigidbody.drag.ToString("0.0"));
	//GUILayout.Label((Mathf.Rad2Deg * transform.localRotation.eulerAngles).ToString("0.0"));
}
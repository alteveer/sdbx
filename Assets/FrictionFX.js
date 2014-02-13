#pragma strict

var wheel_collider:WheelCollider;
var snow_fx:ParticleSystem;

function Start () {
	//wheel_collider = this.GetComponent(WheelCollider);
	snow_fx = GetComponent(ParticleSystem);
}

var hit:WheelHit;
function Update () {
	if(wheel_collider.GetGroundHit(hit)) {
		
		snow_fx.Emit(Mathf.Abs(hit.sidewaysSlip) * transform.root.rigidbody.velocity.magnitude);
	}
}




function OnGUI() {
	GUILayout.Label(hit.sidewaysSlip.ToString("0.000"));
}
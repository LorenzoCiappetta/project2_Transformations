// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
    var res = new Array( 9 );
    res[0] = Math.cos(rotation * Math.PI / 180)*scale;
    res[1] = Math.sin(rotation * Math.PI / 180)*scale;
    res[2] = 0;
    res[3] = -Math.sin(rotation * Math.PI / 180)*scale;
    res[4] = Math.cos(rotation * Math.PI / 180)*scale;
    res[5] = 0;
    res[6] = positionX;
    res[7] = positionY;
    res[8] = 1;
    
	return res;
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
    res = new Array( 9 );
    res[0] = trans1[0]*trans2[0] + trans1[3]*trans2[1] + trans1[6]*trans2[2];
    res[3] = trans1[0]*trans2[3] + trans1[3]*trans2[4] + trans1[6]*trans2[5];
    res[6] = trans1[0]*trans2[6] + trans1[3]*trans2[7] + trans1[6]*trans2[8];
    
    res[1] = trans1[1]*trans2[0] + trans1[4]*trans2[1] + trans1[7]*trans2[2];
    res[4] = trans1[1]*trans2[3] + trans1[4]*trans2[4] + trans1[7]*trans2[5];
    res[7] = trans1[1]*trans2[6] + strans1[4]*trans2[7] + trans1[7]*trans2[8];
    
    res[2] = trans1[2]*trans2[0] + trans1[5]*trans2[1] + trans1[8]*trans2[2];
    res[5] = trans1[2]*trans2[3] + trans1[5]*trans2[4] + trans1[8]*trans2[5];
    res[8] = trans1[2]*trans2[6] + trans1[5]*trans2[7] + trans1[8]*trans2[8];
    
	return res;
}

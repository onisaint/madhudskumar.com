!function(t){function e(t){return 0==(t=+t)||isNaN(t)?t:t>0?1:-1}function a(t){return new Promise(function(e,a){var n=function(i){setTimeout(function(){t&&t.data?e():i>=20?a():n(++i)},50)};n(0)})}function n(){d=m?(t.screen.orientation.angle||0)*l:(t.orientation||0)*l}function i(t){h.orientation.data=t;for(var e in h.orientation.callbacks)h.orientation.callbacks[e].call(this)}function o(t){h.motion.data=t;for(var e in h.motion.callbacks)h.motion.callbacks[e].call(this)}if(void 0===t.FULLTILT||null===t.FULLTILT){var r=Math.PI,s=r/2,c=2*r,l=r/180,u=180/r,h={orientation:{active:!1,callbacks:[],data:void 0},motion:{active:!1,callbacks:[],data:void 0}},m=!(!t.screen||!t.screen.orientation||void 0===t.screen.orientation.angle||null===t.screen.orientation.angle),d=(m?t.screen.orientation.angle:t.orientation||0)*l,v=s,p=r,y=c/3,f=-s,A={};A.version="0.5.3",A.getDeviceOrientation=function(t){return new Promise(function(e,n){var i=new A.DeviceOrientation(t);i.start();new a(h.orientation).then(function(){i._alphaAvailable=h.orientation.data.alpha&&null!==h.orientation.data.alpha,i._betaAvailable=h.orientation.data.beta&&null!==h.orientation.data.beta,i._gammaAvailable=h.orientation.data.gamma&&null!==h.orientation.data.gamma,e(i)}).catch(function(){i.stop(),n("DeviceOrientation is not supported")})})},A.getDeviceMotion=function(t){return new Promise(function(e,n){var i=new A.DeviceMotion(t);i.start();new a(h.motion).then(function(){i._accelerationXAvailable=h.motion.data.acceleration&&h.motion.data.acceleration.x,i._accelerationYAvailable=h.motion.data.acceleration&&h.motion.data.acceleration.y,i._accelerationZAvailable=h.motion.data.acceleration&&h.motion.data.acceleration.z,i._accelerationIncludingGravityXAvailable=h.motion.data.accelerationIncludingGravity&&h.motion.data.accelerationIncludingGravity.x,i._accelerationIncludingGravityYAvailable=h.motion.data.accelerationIncludingGravity&&h.motion.data.accelerationIncludingGravity.y,i._accelerationIncludingGravityZAvailable=h.motion.data.accelerationIncludingGravity&&h.motion.data.accelerationIncludingGravity.z,i._rotationRateAlphaAvailable=h.motion.data.rotationRate&&h.motion.data.rotationRate.alpha,i._rotationRateBetaAvailable=h.motion.data.rotationRate&&h.motion.data.rotationRate.beta,i._rotationRateGammaAvailable=h.motion.data.rotationRate&&h.motion.data.rotationRate.gamma,e(i)}).catch(function(){i.stop(),n("DeviceMotion is not supported")})})},A.Quaternion=function(t,a,n,i){var o;this.set=function(t,e,a,n){this.x=t||0,this.y=e||0,this.z=a||0,this.w=n||1},this.copy=function(t){this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w},this.setFromEuler=function(){var t,e,a,n,i,o,r,s,c,u,h,m;return function(d){return d=d||{},a=(d.alpha||0)*l,t=(d.beta||0)*l,e=(d.gamma||0)*l,o=a/2,n=t/2,i=e/2,r=Math.cos(n),s=Math.cos(i),c=Math.cos(o),u=Math.sin(n),h=Math.sin(i),m=Math.sin(o),this.set(u*s*c-r*h*m,r*h*c+u*s*m,r*s*m+u*h*c,r*s*c-u*h*m),this.normalize(),this}}(),this.setFromRotationMatrix=function(){var t;return function(a){return t=a.elements,this.set(.5*Math.sqrt(1+t[0]-t[4]-t[8])*e(t[7]-t[5]),.5*Math.sqrt(1-t[0]+t[4]-t[8])*e(t[2]-t[6]),.5*Math.sqrt(1-t[0]-t[4]+t[8])*e(t[3]-t[1]),.5*Math.sqrt(1+t[0]+t[4]+t[8])),this}}(),this.multiply=function(t){return o=A.Quaternion.prototype.multiplyQuaternions(this,t),this.copy(o),this},this.rotateX=function(t){return o=A.Quaternion.prototype.rotateByAxisAngle(this,[1,0,0],t),this.copy(o),this},this.rotateY=function(t){return o=A.Quaternion.prototype.rotateByAxisAngle(this,[0,1,0],t),this.copy(o),this},this.rotateZ=function(t){return o=A.Quaternion.prototype.rotateByAxisAngle(this,[0,0,1],t),this.copy(o),this},this.normalize=function(){return A.Quaternion.prototype.normalize(this)},this.set(t,a,n,i)},A.Quaternion.prototype={constructor:A.Quaternion,multiplyQuaternions:function(){var t=new A.Quaternion;return function(e,a){var n=e.x,i=e.y,o=e.z,r=e.w,s=a.x,c=a.y,l=a.z,u=a.w;return t.set(n*u+r*s+i*l-o*c,i*u+r*c+o*s-n*l,o*u+r*l+n*c-i*s,r*u-n*s-i*c-o*l),t}}(),normalize:function(t){var e=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w);return 0===e?(t.x=0,t.y=0,t.z=0,t.w=1):(e=1/e,t.x*=e,t.y*=e,t.z*=e,t.w*=e),t},rotateByAxisAngle:function(){var t,e,a=new A.Quaternion,n=new A.Quaternion;return function(i,o,r){return t=(r||0)/2,e=Math.sin(t),n.set((o[0]||0)*e,(o[1]||0)*e,(o[2]||0)*e,Math.cos(t)),a=A.Quaternion.prototype.multiplyQuaternions(i,n),A.Quaternion.prototype.normalize(a)}}()},A.RotationMatrix=function(t,e,a,n,i,o,r,s,c){var u;this.elements=new Float32Array(9),this.identity=function(){return this.set(1,0,0,0,1,0,0,0,1),this},this.set=function(t,e,a,n,i,o,r,s,c){this.elements[0]=t||1,this.elements[1]=e||0,this.elements[2]=a||0,this.elements[3]=n||0,this.elements[4]=i||1,this.elements[5]=o||0,this.elements[6]=r||0,this.elements[7]=s||0,this.elements[8]=c||1},this.copy=function(t){this.elements[0]=t.elements[0],this.elements[1]=t.elements[1],this.elements[2]=t.elements[2],this.elements[3]=t.elements[3],this.elements[4]=t.elements[4],this.elements[5]=t.elements[5],this.elements[6]=t.elements[6],this.elements[7]=t.elements[7],this.elements[8]=t.elements[8]},this.setFromEuler=function(){var t,e,a,n,i,o,r,s,c;return function(u){return u=u||{},a=(u.alpha||0)*l,t=(u.beta||0)*l,e=(u.gamma||0)*l,n=Math.cos(t),i=Math.cos(e),o=Math.cos(a),r=Math.sin(t),s=Math.sin(e),c=Math.sin(a),this.set(o*i-c*r*s,-n*c,i*c*r+o*s,i*c+o*r*s,o*n,c*s-o*i*r,-n*s,r,n*i),this.normalize(),this}}(),this.setFromQuaternion=function(){var t,e,a,n;return function(i){return t=i.w*i.w,e=i.x*i.x,a=i.y*i.y,n=i.z*i.z,this.set(t+e-a-n,2*(i.x*i.y-i.w*i.z),2*(i.x*i.z+i.w*i.y),2*(i.x*i.y+i.w*i.z),t-e+a-n,2*(i.y*i.z-i.w*i.x),2*(i.x*i.z-i.w*i.y),2*(i.y*i.z+i.w*i.x),t-e-a+n),this}}(),this.multiply=function(t){return u=A.RotationMatrix.prototype.multiplyMatrices(this,t),this.copy(u),this},this.rotateX=function(t){return u=A.RotationMatrix.prototype.rotateByAxisAngle(this,[1,0,0],t),this.copy(u),this},this.rotateY=function(t){return u=A.RotationMatrix.prototype.rotateByAxisAngle(this,[0,1,0],t),this.copy(u),this},this.rotateZ=function(t){return u=A.RotationMatrix.prototype.rotateByAxisAngle(this,[0,0,1],t),this.copy(u),this},this.normalize=function(){return A.RotationMatrix.prototype.normalize(this)},this.set(t,e,a,n,i,o,r,s,c)},A.RotationMatrix.prototype={constructor:A.RotationMatrix,multiplyMatrices:function(){var t,e,a=new A.RotationMatrix;return function(n,i){return t=n.elements,e=i.elements,a.set(t[0]*e[0]+t[1]*e[3]+t[2]*e[6],t[0]*e[1]+t[1]*e[4]+t[2]*e[7],t[0]*e[2]+t[1]*e[5]+t[2]*e[8],t[3]*e[0]+t[4]*e[3]+t[5]*e[6],t[3]*e[1]+t[4]*e[4]+t[5]*e[7],t[3]*e[2]+t[4]*e[5]+t[5]*e[8],t[6]*e[0]+t[7]*e[3]+t[8]*e[6],t[6]*e[1]+t[7]*e[4]+t[8]*e[7],t[6]*e[2]+t[7]*e[5]+t[8]*e[8]),a}}(),normalize:function(t){var e=t.elements,a=e[0]*e[4]*e[8]-e[0]*e[5]*e[7]-e[1]*e[3]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6];return e[0]/=a,e[1]/=a,e[2]/=a,e[3]/=a,e[4]/=a,e[5]/=a,e[6]/=a,e[7]/=a,e[8]/=a,t.elements=e,t},rotateByAxisAngle:function(){var t,e,a=new A.RotationMatrix,n=new A.RotationMatrix,i=!1;return function(o,r,s){return n.identity(),i=!1,t=Math.sin(s),e=Math.cos(s),1===r[0]&&0===r[1]&&0===r[2]?(i=!0,n.elements[4]=e,n.elements[5]=-t,n.elements[7]=t,n.elements[8]=e):1===r[1]&&0===r[0]&&0===r[2]?(i=!0,n.elements[0]=e,n.elements[2]=t,n.elements[6]=-t,n.elements[8]=e):1===r[2]&&0===r[0]&&0===r[1]&&(i=!0,n.elements[0]=e,n.elements[1]=-t,n.elements[3]=t,n.elements[4]=e),i?(a=A.RotationMatrix.prototype.multiplyMatrices(o,n),a=A.RotationMatrix.prototype.normalize(a)):a=o,a}}()},A.Euler=function(t,e,a){this.set=function(t,e,a){this.alpha=t||0,this.beta=e||0,this.gamma=a||0},this.copy=function(t){this.alpha=t.alpha,this.beta=t.beta,this.gamma=t.gamma},this.setFromRotationMatrix=function(){var t,e,a,n;return function(i){(t=i.elements)[8]>0?(e=Math.atan2(-t[1],t[4]),a=Math.asin(t[7]),n=Math.atan2(-t[6],t[8])):t[8]<0?(e=Math.atan2(t[1],-t[4]),a=-Math.asin(t[7]),a+=a>=0?-r:r,n=Math.atan2(t[6],-t[8])):t[6]>0?(e=Math.atan2(-t[1],t[4]),a=Math.asin(t[7]),n=-s):t[6]<0?(e=Math.atan2(t[1],-t[4]),a=-Math.asin(t[7]),a+=a>=0?-r:r,n=-s):(e=Math.atan2(t[3],t[0]),a=t[7]>0?s:-s,n=0),0>e&&(e+=c),e*=u,a*=u,n*=u,this.set(e,a,n)}}(),this.setFromQuaternion=function(){var t,e,a;return function(n){var i=n.w*n.w,o=n.x*n.x,l=n.y*n.y,h=n.z*n.z,m=i+o+l+h,d=n.w*n.x+n.y*n.z;if(d>.499999*m)t=2*Math.atan2(n.y,n.w),e=s,a=0;else if((1e-6-.5)*m>d)t=-2*Math.atan2(n.y,n.w),e=-s,a=0;else{var v=i-o+l-h,p=2*(n.w*n.z-n.x*n.y),y=i-o-l+h,f=2*(n.w*n.y-n.x*n.z);y>0?(t=Math.atan2(p,v),e=Math.asin(2*d/m),a=Math.atan2(f,y)):(t=Math.atan2(-p,-v),e=-Math.asin(2*d/m),e+=0>e?r:-r,a=Math.atan2(-f,-y))}0>t&&(t+=c),t*=u,e*=u,a*=u,this.set(t,e,a)}}(),this.rotateX=function(t){return A.Euler.prototype.rotateByAxisAngle(this,[1,0,0],t),this},this.rotateY=function(t){return A.Euler.prototype.rotateByAxisAngle(this,[0,1,0],t),this},this.rotateZ=function(t){return A.Euler.prototype.rotateByAxisAngle(this,[0,0,1],t),this},this.set(t,e,a)},A.Euler.prototype={constructor:A.Euler,rotateByAxisAngle:function(){var t=new A.RotationMatrix;return function(e,a,n){return t.setFromEuler(e),t=A.RotationMatrix.prototype.rotateByAxisAngle(t,a,n),e.setFromRotationMatrix(t),e}}()},A.DeviceOrientation=function(e){this.options=e||{};var a=0,n=0;if(this.alphaOffsetScreen=0,this.alphaOffsetDevice=void 0,"game"===this.options.type){var i=function(e){return null!==e.alpha&&(this.alphaOffsetDevice=new A.Euler(e.alpha,0,0),this.alphaOffsetDevice.rotateZ(-d),++n>=10)?void t.removeEventListener("deviceorientation",i,!1):void(++a>=200&&t.removeEventListener("deviceorientation",i,!1))}.bind(this);t.addEventListener("deviceorientation",i,!1)}else if("world"===this.options.type){var o=function(e){return!0!==e.absolute&&void 0!==e.webkitCompassAccuracy&&null!==e.webkitCompassAccuracy&&+e.webkitCompassAccuracy>=0&&+e.webkitCompassAccuracy<50&&(this.alphaOffsetDevice=new A.Euler(e.webkitCompassHeading,0,0),this.alphaOffsetDevice.rotateZ(d),this.alphaOffsetScreen=d,++n>=10)?void t.removeEventListener("deviceorientation",o,!1):void(++a>=200&&t.removeEventListener("deviceorientation",o,!1))}.bind(this);t.addEventListener("deviceorientation",o,!1)}},A.DeviceOrientation.prototype={constructor:A.DeviceOrientation,start:function(e){e&&"[object Function]"==Object.prototype.toString.call(e)&&h.orientation.callbacks.push(e),m?t.screen.orientation.addEventListener("change",n,!1):t.addEventListener("orientationchange",n,!1),h.orientation.active||(t.addEventListener("deviceorientation",i,!1),h.orientation.active=!0)},stop:function(){h.orientation.active&&(t.removeEventListener("deviceorientation",i,!1),h.orientation.active=!1)},listen:function(t){this.start(t)},getFixedFrameQuaternion:function(){var t=new A.Euler,e=new A.RotationMatrix,a=new A.Quaternion;return function(){var n=h.orientation.data||{alpha:0,beta:0,gamma:0},i=n.alpha;return this.alphaOffsetDevice&&(e.setFromEuler(this.alphaOffsetDevice),e.rotateZ(-this.alphaOffsetScreen),t.setFromRotationMatrix(e),t.alpha<0&&(t.alpha+=360),t.alpha%=360,i-=t.alpha),t.set(i,n.beta,n.gamma),a.setFromEuler(t),a}}(),getScreenAdjustedQuaternion:function(){var t;return function(){return(t=this.getFixedFrameQuaternion()).rotateZ(-d),t}}(),getFixedFrameMatrix:function(){var t=new A.Euler,e=new A.RotationMatrix;return function(){var a=h.orientation.data||{alpha:0,beta:0,gamma:0},n=a.alpha;return this.alphaOffsetDevice&&(e.setFromEuler(this.alphaOffsetDevice),e.rotateZ(-this.alphaOffsetScreen),t.setFromRotationMatrix(e),t.alpha<0&&(t.alpha+=360),t.alpha%=360,n-=t.alpha),t.set(n,a.beta,a.gamma),e.setFromEuler(t),e}}(),getScreenAdjustedMatrix:function(){var t;return function(){return(t=this.getFixedFrameMatrix()).rotateZ(-d),t}}(),getFixedFrameEuler:function(){var t,e=new A.Euler;return function(){return t=this.getFixedFrameMatrix(),e.setFromRotationMatrix(t),e}}(),getScreenAdjustedEuler:function(){var t,e=new A.Euler;return function(){return t=this.getScreenAdjustedMatrix(),e.setFromRotationMatrix(t),e}}(),isAbsolute:function(){return!(!h.orientation.data||!0!==h.orientation.data.absolute)},getLastRawEventData:function(){return h.orientation.data||{}},_alphaAvailable:!1,_betaAvailable:!1,_gammaAvailable:!1,isAvailable:function(t){switch(t){case this.ALPHA:return this._alphaAvailable;case this.BETA:return this._betaAvailable;case this.GAMMA:return this._gammaAvailable}},ALPHA:"alpha",BETA:"beta",GAMMA:"gamma"},A.DeviceMotion=function(t){this.options=t||{}},A.DeviceMotion.prototype={constructor:A.DeviceMotion,start:function(e){e&&"[object Function]"==Object.prototype.toString.call(e)&&h.motion.callbacks.push(e),m?t.screen.orientation.addEventListener("change",n,!1):t.addEventListener("orientationchange",n,!1),h.motion.active||(t.addEventListener("devicemotion",o,!1),h.motion.active=!0)},stop:function(){h.motion.active&&(t.removeEventListener("devicemotion",o,!1),h.motion.active=!1)},listen:function(t){this.start(t)},getScreenAdjustedAcceleration:function(){var t=h.motion.data&&h.motion.data.acceleration?h.motion.data.acceleration:{x:0,y:0,z:0},e={};switch(d){case v:e.x=-t.y,e.y=t.x;break;case p:e.x=-t.x,e.y=-t.y;break;case y:case f:e.x=t.y,e.y=-t.x;break;default:e.x=t.x,e.y=t.y}return e.z=t.z,e},getScreenAdjustedAccelerationIncludingGravity:function(){var t=h.motion.data&&h.motion.data.accelerationIncludingGravity?h.motion.data.accelerationIncludingGravity:{x:0,y:0,z:0},e={};switch(d){case v:e.x=-t.y,e.y=t.x;break;case p:e.x=-t.x,e.y=-t.y;break;case y:case f:e.x=t.y,e.y=-t.x;break;default:e.x=t.x,e.y=t.y}return e.z=t.z,e},getScreenAdjustedRotationRate:function(){var t=h.motion.data&&h.motion.data.rotationRate?h.motion.data.rotationRate:{alpha:0,beta:0,gamma:0},e={};switch(d){case v:e.beta=-t.gamma,e.gamma=t.beta;break;case p:e.beta=-t.beta,e.gamma=-t.gamma;break;case y:case f:e.beta=t.gamma,e.gamma=-t.beta;break;default:e.beta=t.beta,e.gamma=t.gamma}return e.alpha=t.alpha,e},getLastRawEventData:function(){return h.motion.data||{}},_accelerationXAvailable:!1,_accelerationYAvailable:!1,_accelerationZAvailable:!1,_accelerationIncludingGravityXAvailable:!1,_accelerationIncludingGravityYAvailable:!1,_accelerationIncludingGravityZAvailable:!1,_rotationRateAlphaAvailable:!1,_rotationRateBetaAvailable:!1,_rotationRateGammaAvailable:!1,isAvailable:function(t){switch(t){case this.ACCELERATION_X:return this._accelerationXAvailable;case this.ACCELERATION_Y:return this._accelerationYAvailable;case this.ACCELERATION_Z:return this._accelerationZAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_X:return this._accelerationIncludingGravityXAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_Y:return this._accelerationIncludingGravityYAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_Z:return this._accelerationIncludingGravityZAvailable;case this.ROTATION_RATE_ALPHA:return this._rotationRateAlphaAvailable;case this.ROTATION_RATE_BETA:return this._rotationRateBetaAvailable;case this.ROTATION_RATE_GAMMA:return this._rotationRateGammaAvailable}},ACCELERATION_X:"accelerationX",ACCELERATION_Y:"accelerationY",ACCELERATION_Z:"accelerationZ",ACCELERATION_INCLUDING_GRAVITY_X:"accelerationIncludingGravityX",ACCELERATION_INCLUDING_GRAVITY_Y:"accelerationIncludingGravityY",ACCELERATION_INCLUDING_GRAVITY_Z:"accelerationIncludingGravityZ",ROTATION_RATE_ALPHA:"rotationRateAlpha",ROTATION_RATE_BETA:"rotationRateBeta",ROTATION_RATE_GAMMA:"rotationRateGamma"},t.FULLTILT=A}}(window),function(t,e){var a={GyroNorm:function(){function t(t){return Math.round(t*Math.pow(10,p))/Math.pow(10,p)}function e(t){y&&("string"==typeof t&&(t={message:t,code:0}),y(t))}var a="game",n="deviceorientation",i="accelerationinludinggravity",o=null,r=0,s=0,c=!1,l=!1,u=null,h=null,m=50,d=!0,v=a,p=2,y=null,f=!1,A=function(t){};return A.GAME=a,A.WORLD="world",A.DEVICE_ORIENTATION=n,A.ACCELERATION="acceleration",A.ACCELERATION_INCLUDING_GRAVITY=i,A.ROTATION_RATE="rotationrate",A.prototype.init=function(t){t&&t.frequency&&(m=t.frequency),t&&t.gravityNormalized&&(d=t.gravityNormalized),t&&t.orientationBase&&(v=t.orientationBase),t&&"number"==typeof t.decimalCount&&t.decimalCount>=0&&(p=parseInt(t.decimalCount)),t&&t.logger&&(y=t.logger),t&&t.screenAdjusted&&(f=t.screenAdjusted);var e=new FULLTILT.getDeviceOrientation({type:v}).then(function(t){u=t}),a=(new FULLTILT.getDeviceMotion).then(function(t){s=(h=t).getScreenAdjustedAccelerationIncludingGravity().z>0?-1:1});return Promise.all([e,a]).then(function(){l=!0})},A.prototype.end=function(){try{l=!1,this.stop(),h.stop(),u.stop()}catch(t){e(t)}},A.prototype.start=function(n){return l?(o=setInterval(function(){n(function(){var e={};e=f?u.getScreenAdjustedEuler():u.getFixedFrameEuler();var n=h.getScreenAdjustedAcceleration(),i=h.getScreenAdjustedAccelerationIncludingGravity(),o=h.getScreenAdjustedRotationRate(),c=0;v===a?(c=e.alpha-r,c=0>c?360-Math.abs(c):c):c=e.alpha;var l={do:{alpha:t(c),beta:t(e.beta),gamma:t(e.gamma),absolute:u.isAbsolute()},dm:{x:t(n.x),y:t(n.y),z:t(n.z),gx:t(i.x),gy:t(i.y),gz:t(i.z),alpha:t(o.alpha),beta:t(o.beta),gamma:t(o.gamma)}};return d&&(l.dm.gx*=s,l.dm.gy*=s,l.dm.gz*=s),l}())},m),void(c=!0)):void e({message:'GyroNorm is not initialized yet. First call the "init()" function.',code:1})},A.prototype.stop=function(){o&&(clearInterval(o),c=!1)},A.prototype.normalizeGravity=function(t){d=!!t},A.prototype.setHeadDirection=function(){return!f&&"world"!==v&&(r=u.getFixedFrameEuler().alpha,!0)},A.prototype.startLogging=function(t){t&&(y=t)},A.prototype.stopLogging=function(){y=null},A.prototype.isAvailable=function(t){var e=u.getScreenAdjustedEuler(),a=h.getScreenAdjustedAcceleration(),o=h.getScreenAdjustedAccelerationIncludingGravity(),r=h.getScreenAdjustedRotationRate();switch(t){case n:return e.alpha&&null!==e.alpha&&e.beta&&null!==e.beta&&e.gamma&&null!==e.gamma;case"acceleration":return a&&a.x&&a.y&&a.z;case i:return o&&o.x&&o.y&&o.z;case"rotationrate":return r&&r.alpha&&r.beta&&r.gamma;default:return{deviceOrientationAvailable:e.alpha&&null!==e.alpha&&e.beta&&null!==e.beta&&e.gamma&&null!==e.gamma,accelerationAvailable:a&&a.x&&a.y&&a.z,accelerationIncludingGravityAvailable:o&&o.x&&o.y&&o.z,rotationRateAvailable:r&&r.alpha&&r.beta&&r.gamma}}},A.prototype.isRunning=function(){return c},A}()};"function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:t.GyroNorm=a.GyroNorm}(this),console.group("Hi!"),console.log("%cHappy seeing you here.","background: #ff397c; padding: 12px; color: white; font: 60px"),console.log("%cLooks like you too are a web sniffer like me! let's talk","background: deeppink; padding: 12px; color: white; font: 60px"),console.log("%cMail to me at madhudskumar@live.in and let's continue...","background: #7444d5; padding: 12px; color: white; font: 60px"),console.groupEnd();var $mContent=document.getElementById("m-content"),$mInner=document.getElementById("m-inner"),$mContentStyle=$mContent.style,$mInnerStyle=$mInner.style;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var gn_1=new GyroNorm,$avatar=document.getElementById("m-avatar"),$avatarStyle_1=$avatar.style;if(gn_1.init().then(function(){gn_1.start(function(t){window.requestAnimationFrame(function(){var e=[Math.abs(t.do.beta),Math.abs(t.do.gamma),Math.abs(t.do.alpha)],a=e[0],n=e[1],i=e[2];$mContentStyle.backgroundPositionX=a+"px",$mContentStyle.backgroundPositionY=n+"px",$mContentStyle.backgroundColor="rgba("+a+"%,"+i+"%,"+n+"%,.77)",$avatarStyle_1.boxShadow="0 0 "+n+"px 4px rgba(0,0,0,.16)"})})}).catch(function(t){}),navigator.vibrate){var $tamn_1=document.getElementById("tamn");$tamn_1.addEventListener("click",function(t){navigator.vibrate([250,200,150,150,100,50,450,450,150,150,100,50,900,2250]),$tamn_1.innerText="#Voltron",setTimeout(function(){$tamn_1.innerText="Madhu Kumar D S"},3e3)})}}else window.onmousemove=function(t){window.requestAnimationFrame(function(){var e=function(t){return t%100|0};$mContentStyle.backgroundColor="rgba("+e(t.screenX)+"%,"+e(t.screenY+t.screenX)+"%,"+e(t.screenY)+"%,.77)",$mContentStyle.backgroundPositionX=t.screenX+"px",$mContentStyle.backgroundPositionY=t.screenY+"px"})};
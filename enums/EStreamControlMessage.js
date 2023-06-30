/* eslint-disable */
// Auto-generated by generate-enums script on Fri Jun 30 2023 01:13:56 GMT-0400 (Eastern Daylight Time)

/**
 * @enum
 * @readonly
 */
const EStreamControlMessage = {
	"AuthenticationRequest": 1,
	"AuthenticationResponse": 2,
	"NegotiationInit": 3,
	"NegotiationSetConfig": 4,
	"NegotiationComplete": 5,
	"ClientHandshake": 6,
	"ServerHandshake": 7,
	"StartNetworkTest": 8,
	"KeepAlive": 9,
	"LAST_SETUP_MESSAGE": 15,
	"StartAudioData": 50,
	"StopAudioData": 51,
	"StartVideoData": 52,
	"StopVideoData": 53,
	"InputMouseMotion": 54,
	"InputMouseWheel": 55,
	"InputMouseDown": 56,
	"InputMouseUp": 57,
	"InputKeyDown": 58,
	"InputKeyUp": 59,
	"OBSOLETE": 60,
	"OBSOLETE": 61,
	"OBSOLETE": 62,
	"ShowCursor": 63,
	"HideCursor": 64,
	"SetCursor": 65,
	"GetCursorImage": 66,
	"SetCursorImage": 67,
	"DeleteCursor": 68,
	"SetTargetFramerate": 69,
	"InputLatencyTest": 70,
	"OBSOLETE": 71,
	"OverlayEnabled": 74,
	"OBSOLETE": 75,
	"OBSOLETE": 76,
	"OBSOLETE": 77,
	"OBSOLETE": 78,
	"VideoDecoderInfo": 80,
	"SetTitle": 81,
	"SetIcon": 82,
	"QuitRequest": 83,
	"SetQoS": 87,
	"OBSOLETE": 88,
	"SetGammaRamp": 89,
	"VideoEncoderInfo": 90,
	"OBSOLETE": 93,
	"SetTargetBitrate": 94,
	"OBSOLETE": 95,
	"OBSOLETE": 96,
	"OBSOLETE": 97,
	"SetActivity": 98,
	"SetStreamingClientConfig": 99,
	"SystemSuspend": 100,
	"OBSOLETE": 101,
	"VirtualHereRequest": 102,
	"VirtualHereReady": 103,
	"VirtualHereShareDevice": 104,
	"SetSpectatorMode": 105,
	"RemoteHID": 106,
	"StartMicrophoneData": 107,
	"StopMicrophoneData": 108,
	"InputText": 109,
	"TouchConfigActive": 110,
	"GetTouchConfigData": 111,
	"SetTouchConfigData": 112,
	"SaveTouchConfigLayout": 113,
	"TouchActionSetActive": 114,
	"GetTouchIconData": 115,
	"SetTouchIconData": 116,
	"InputTouchFingerDown": 117,
	"InputTouchFingerMotion": 118,
	"InputTouchFingerUp": 119,
	"SetCaptureSize": 120,
	"SetFlashState": 121,
	"Pause": 122,
	"Resume": 123,
	"EnableHighResCapture": 124,
	"DisableHighResCapture": 125,
	"ToggleMagnification": 126,
	"SetCapslock": 127,
	"SetKeymap": 128,
	"StopRequest": 129,
	"TouchActionSetLayerAdded": 130,
	"TouchActionSetLayerRemoved": 131,
	"RemotePlayTogetherGroupUpdate": 132,
	"SetInputTemporarilyDisabled": 133,
	"SetQualityOverride": 134,
	"SetBitrateOverride": 135,
	"ShowOnScreenKeyboard": 136,
	"ControllerConfigMsg": 137,
	"ControllerPersonalizationUpdate": 138,
	"EnableNeptuneData": 139,
	"DisableNeptuneData": 140,
	"StartNeptuneData": 141,
	"StopNeptuneData": 142,

	// Value-to-name mapping for convenience
	"1": "AuthenticationRequest",
	"2": "AuthenticationResponse",
	"3": "NegotiationInit",
	"4": "NegotiationSetConfig",
	"5": "NegotiationComplete",
	"6": "ClientHandshake",
	"7": "ServerHandshake",
	"8": "StartNetworkTest",
	"9": "KeepAlive",
	"15": "LAST_SETUP_MESSAGE",
	"50": "StartAudioData",
	"51": "StopAudioData",
	"52": "StartVideoData",
	"53": "StopVideoData",
	"54": "InputMouseMotion",
	"55": "InputMouseWheel",
	"56": "InputMouseDown",
	"57": "InputMouseUp",
	"58": "InputKeyDown",
	"59": "InputKeyUp",
	"60": "OBSOLETE",
	"61": "OBSOLETE",
	"62": "OBSOLETE",
	"63": "ShowCursor",
	"64": "HideCursor",
	"65": "SetCursor",
	"66": "GetCursorImage",
	"67": "SetCursorImage",
	"68": "DeleteCursor",
	"69": "SetTargetFramerate",
	"70": "InputLatencyTest",
	"71": "OBSOLETE",
	"74": "OverlayEnabled",
	"75": "OBSOLETE",
	"76": "OBSOLETE",
	"77": "OBSOLETE",
	"78": "OBSOLETE",
	"80": "VideoDecoderInfo",
	"81": "SetTitle",
	"82": "SetIcon",
	"83": "QuitRequest",
	"87": "SetQoS",
	"88": "OBSOLETE",
	"89": "SetGammaRamp",
	"90": "VideoEncoderInfo",
	"93": "OBSOLETE",
	"94": "SetTargetBitrate",
	"95": "OBSOLETE",
	"96": "OBSOLETE",
	"97": "OBSOLETE",
	"98": "SetActivity",
	"99": "SetStreamingClientConfig",
	"100": "SystemSuspend",
	"101": "OBSOLETE",
	"102": "VirtualHereRequest",
	"103": "VirtualHereReady",
	"104": "VirtualHereShareDevice",
	"105": "SetSpectatorMode",
	"106": "RemoteHID",
	"107": "StartMicrophoneData",
	"108": "StopMicrophoneData",
	"109": "InputText",
	"110": "TouchConfigActive",
	"111": "GetTouchConfigData",
	"112": "SetTouchConfigData",
	"113": "SaveTouchConfigLayout",
	"114": "TouchActionSetActive",
	"115": "GetTouchIconData",
	"116": "SetTouchIconData",
	"117": "InputTouchFingerDown",
	"118": "InputTouchFingerMotion",
	"119": "InputTouchFingerUp",
	"120": "SetCaptureSize",
	"121": "SetFlashState",
	"122": "Pause",
	"123": "Resume",
	"124": "EnableHighResCapture",
	"125": "DisableHighResCapture",
	"126": "ToggleMagnification",
	"127": "SetCapslock",
	"128": "SetKeymap",
	"129": "StopRequest",
	"130": "TouchActionSetLayerAdded",
	"131": "TouchActionSetLayerRemoved",
	"132": "RemotePlayTogetherGroupUpdate",
	"133": "SetInputTemporarilyDisabled",
	"134": "SetQualityOverride",
	"135": "SetBitrateOverride",
	"136": "ShowOnScreenKeyboard",
	"137": "ControllerConfigMsg",
	"138": "ControllerPersonalizationUpdate",
	"139": "EnableNeptuneData",
	"140": "DisableNeptuneData",
	"141": "StartNeptuneData",
	"142": "StopNeptuneData",
};

module.exports = EStreamControlMessage;

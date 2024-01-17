// var gameInput = Reptile.Core.Instance.GameInput;
// gameInput.DisableAllControllerMaps();
// gameInput.EnableControllerMap(0);
// gameInput.EnableControllerMap(6);

var classes = new Type[] {
	typeof(Reptile.Phone.EmailMessage),
	typeof(Reptile.Phone.GraffitiAppEntry),
	typeof(Reptile.MoveStyleSkin),
	typeof(Reptile.MusicTrack),
	typeof(Reptile.OutfitUnlockable)
};

Log("===== START");
foreach (var c in classes) {
	var objs = RuntimeHelper.FindObjectsOfTypeAll(c);
	foreach (var o in objs) {
		if (o is Reptile.Phone.EmailMessage) {
			var e = (Reptile.Phone.EmailMessage) o;
			Log("e");
			Log("uid " + e.uid);
			Log("subject " + e.subject);
			Log("sender " + e.characterNameIDOfSender);
			Log("messages " + string.Join(" - ", e.message));
		}

		if (o is Reptile.Phone.GraffitiAppEntry) {
			var g = (Reptile.Phone.GraffitiAppEntry) o;
			Log("g");
			Log("uid " + g.uid);
			Log("artist " + g.Artist);
			Log("title " + g.Title);
			Log("size " + g.Size);
			Log("texture " + g.GraffitiTexture.name);
		}

		if (o is Reptile.MoveStyleSkin) {
			var ms = (Reptile.MoveStyleSkin) o;
			Log("ms");
			Log("uid " + ms.uid);
			Log("moveStyle " + ms.moveStyle);
			Log("skinIndex " + ms.skinIndex);
			Log("skinTexture " + ms.skinTexture.name);
			Log("title " + ms.Title);
		}

		if (o is Reptile.MusicTrack) {
			var mt = (Reptile.MusicTrack) o;
			Log("mt");
			Log("uid " + mt.uid);
			Log("artist " + mt.Artist);
			Log("title " + mt.Title);
			Log("audioClip " + mt.AudioClip.name);
		}

		if (o is Reptile.OutfitUnlockable) {
			var ou = (Reptile.OutfitUnlockable) o;
			Log("ou");
			Log("uid " + ou.uid);
			Log("character " + ou.character);
			Log("outfitIndex " + ou.outfitIndex);
			Log("outfitName " + ou.outfitName);
		}

		Log("=====");
	}
}
Log("===== END");

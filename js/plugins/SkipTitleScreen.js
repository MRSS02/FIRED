/*:
 * @plugindesc Skip the title scene for testing purpose.
 * @version 1.0
 */
 
Scene_Boot.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SoundManager.preloadImportantSounds();
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);// skip title screen and go to map
        Window_TitleCommand.initCommandPosition();
        this.updateDocumentTitle();
};

 
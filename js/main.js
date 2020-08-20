//=============================================================================
// main.js
//=============================================================================
colorofthebar = 0
PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};

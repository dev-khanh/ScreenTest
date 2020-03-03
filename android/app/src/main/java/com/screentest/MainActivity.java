package com.screentest;

import android.os.Build;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ScreenTest";
  }

  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
      toggleHideyBar();
    }
  }
  public void toggleHideyBar() {
    int uiOptions = this.getWindow().getDecorView().getSystemUiVisibility();
    int newUiOptions = uiOptions;
    boolean isImmersiveModeEnabled = ((uiOptions | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY) == uiOptions);
    if (isImmersiveModeEnabled) {
      Log.i("DEVK", "Turning immersive mode mode off. ");
    } else {
      Log.i("DEVK", "Turning immersive mode mode on.");
    }
    // Navigation bar hiding:  Backwards compatible to ICS.
    if (Build.VERSION.SDK_INT >= 14) {
      newUiOptions ^= View.SYSTEM_UI_FLAG_HIDE_NAVIGATION;
    }
    // Status bar hiding: Backwards compatible to Jellybean
    if (Build.VERSION.SDK_INT >= 16) {
      newUiOptions ^= View.SYSTEM_UI_FLAG_FULLSCREEN;
    }
    if (Build.VERSION.SDK_INT >= 18) {
      newUiOptions ^= View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
    }
    this.getWindow().getDecorView().setSystemUiVisibility(newUiOptions);
  }
}

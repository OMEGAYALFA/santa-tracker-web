/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.AnimationPlayer');
goog.require('goog.events.EventTarget');

/**
 * Manages queueing up dance animations.
 *
 * @param {app.Scene} scene where animations happens.
 * @constructor
 */
app.AnimationPlayer = function(scene) {
  goog.events.EventTarget.call(this);
  this.scene = scene;
};
goog.inherits(app.AnimationPlayer, goog.events.EventTarget);

/**
 * Starts a dance routine with the specified player steps.
 *
 * @param {app.Step[]} steps to have main player perform.
 */
app.AnimationPlayer.prototype.start = function(steps) {
  steps.forEach((step, i) => {
    setTimeout(() => {
      this.dispatchEvent({type: 'step', data: step.id});
    }, i * 1000);
  });
  setTimeout(() => {
    this.dispatchEvent('finish');
  }, steps.length * 1000);
};

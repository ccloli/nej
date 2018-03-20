/*
 * ------------------------------------------
 * 点击手势封装实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
/** @module util/gesture/drag */
NEJ.define([
    'base/klass',
    './gesture.js'
],function(_k,_t,_p,_o,_f,_r,_pro){
    /**
     * 
     * tap taphold dbltap
     * 
     * @class    module:util/gesture/drag._$$GestureDrag
     * @extends  module:util/event._$$EventTarget
     * 
     * @param    {Object}      config  - 配置参数
     * 
     * 
     */
    _p._$$GestureDrag = _k._$klass();
    _pro = _p._$$GestureDrag._$extend(_t._$$Gesture);
    /**
     * 控件初始化
     * 
     * @protected
     * @method module:util/gesture/drag._$$GestureDrag#__reset
     * @param  {Object} arg0 - 配置参数
     * @return {Void}
     */
    _pro.__reset = function(_options){
        this.__super(_options);
        
    };
    /**
     * 开始触摸
     * 
     * @protected
     * @method module:util/gesture/drag._$$GestureDrag#__onTouchStart
     * @param  {Object} arg0 - 事件对象
     * @return {Void}
     */
    _pro.__onTouchStart = function(_event){
        
    };
    /**
     * 触摸进行中
     * 
     * @protected
     * @method module:util/gesture/drag._$$GestureDrag#__onTouchMove
     * @param  {Object} arg0 - 事件对象
     * @return {Void}
     */
    _pro.__onTouchMove = function(_event){
        
    };
    /**
     * 触摸结束
     * 
     * @protected
     * @method module:util/gesture/drag._$$GestureDrag#__onTouchEnd
     * @param  {Object} arg0 - 事件对象
     * @return {Void}
     */
    _pro.__onTouchEnd = function(_event){
        
    };
    
    
});

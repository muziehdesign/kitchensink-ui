import{g as ht}from"./chunk-YRHERNJR.js";import{$ as ct,A as ot,B as st,D as x,E as rt,F as E,Y as lt,Z as dt,aa as mt,d as J,e as I,i as tt,j as et,n as it,x as at,y as nt}from"./chunk-4J7264TK.js";import"./chunk-DXKQPQSL.js";import{d as Q,i as X}from"./chunk-7DT3MKEW.js";import{A as F,B as _,Cb as o,Da as V,Db as s,Eb as Z,Ga as G,Ia as H,J as y,Jb as K,Nb as T,Oa as O,W as j,Yb as r,bb as d,da as P,ea as N,f,fc as D,ga as C,hb as U,ia as c,ja as B,na as g,nb as $,oa as z,rb as q,sb as Y,vb as W,w as M}from"./chunk-BXRIWIV5.js";import{a as b,b as L}from"./chunk-EQDQRRRY.js";var pt=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g({type:t,selectors:[["app-modal-add-order"]],decls:7,vars:0,consts:[[1,"form"],[1,"field"],[1,"field-label"],["type","text",1,"field-control"]],template:function(e,n){e&1&&(o(0,"h2"),r(1,"Add order"),s(),o(2,"form",0)(3,"label",1)(4,"span",2),r(5,"Order number"),s(),Z(6,"input",3),s()())}});let i=t;return i})();function Dt(i,t){}var v=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},w="mdc-dialog--open",ut="mdc-dialog--opening",ft="mdc-dialog--closing",xt=150,At=75,Ot=(()=>{let t=class t extends dt{constructor(a,e,n,h,m,p,u,R,yt){super(a,e,n,h,m,p,u,yt),this._animationMode=R,this._animationStateChanged=new H,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?vt(this._config.enterAnimationDuration)??xt:0,this._exitAnimationDuration=this._animationsEnabled?vt(this._config.exitAnimationDuration)??At:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(_t,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ut,w)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(w),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(w),this._animationsEnabled?(this._hostElement.style.setProperty(_t,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ft)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(a){this._actionSectionCount+=a,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(ut,ft)}_waitForAnimationToComplete(a,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,a)}_requestAnimationFrame(a){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(a):a()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(a){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:a})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(a){let e=super.attachComponentPortal(a);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}};t.\u0275fac=function(e){return new(e||t)(d(G),d(et),d(Q,8),d(v),d(tt),d(U),d(st),d(O,8),d(it))},t.\u0275cmp=g({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,n){e&2&&(K("id",n._config.id),Y("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),W("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},standalone:!0,features:[$,D],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1),q(2,Dt,0,0,"ng-template",2),s()())},dependencies:[at],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2});let i=t;return i})(),_t="--mat-dialog-transition-duration";function vt(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?I(i.substring(0,i.length-2)):i.endsWith("s")?I(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var A=function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i}(A||{}),S=class{constructor(t,l,a){this._ref=t,this._containerInstance=a,this._afterOpened=new f,this._beforeClosed=new f,this._state=A.OPEN,this.disableClose=l.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),a._animationStateChanged.pipe(_(e=>e.state==="opened"),y(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe(_(e=>e.state==="closed"),y(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),F(this.backdropClick(),this.keydownEvents().pipe(_(e=>e.keyCode===27&&!this.disableClose&&!J(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),Tt(this,e.type==="keydown"?"keyboard":"mouse"))})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe(_(l=>l.state==="closing"),y(1)).subscribe(l=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),l.totalTime+100)}),this._state=A.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let l=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?l.left(t.left):l.right(t.right):l.centerHorizontally(),t&&(t.top||t.bottom)?t.top?l.top(t.top):l.bottom(t.bottom):l.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",l=""){return this._ref.updateSize(t,l),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=A.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Tt(i,t,l){return i._closeInteractionType=t,i.close(l)}var It=new C("MatMdcDialogData"),Et=new C("mat-mdc-dialog-default-options"),wt=new C("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=B(x);return()=>i.scrollStrategies.block()}});var St=0,k=(()=>{let t=class t{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let a=this._parentDialog;return a?a._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(a,e,n,h,m,p,u,R){this._overlay=a,this._defaultOptions=h,this._scrollStrategy=m,this._parentDialog=p,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new f,this._afterOpenedAtThisLevel=new f,this.dialogConfigClass=v,this.afterAllClosed=M(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(j(void 0))),this._dialog=e.get(ct),this._dialogRefConstructor=S,this._dialogContainerType=Ot,this._dialogDataToken=It}open(a,e){let n;e=b(b({},this._defaultOptions||new v),e),e.id=e.id||`mat-mdc-dialog-${St++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let h=this._dialog.open(a,L(b({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:lt,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(m,p,u)=>(n=new this._dialogRefConstructor(m,e,u),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:p.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=h.componentRef,n.componentInstance=h.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let m=this.openDialogs.indexOf(n);m>-1&&(this.openDialogs.splice(m,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(a){return this.openDialogs.find(e=>e.id===a)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(a){let e=a.length;for(;e--;)a[e].close()}};t.\u0275fac=function(e){return new(e||t)(c(x),c(V),c(X,8),c(Et,8),c(wt),c(t,12),c(ot),c(O,8))},t.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var bt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=z({type:t}),t.\u0275inj=N({providers:[k],imports:[mt,rt,nt,E,E]});let i=t;return i})();var me=(()=>{let t=class t{constructor(a,e){this.modalService=a,this.dialog=e}ngOnInit(){}open(){this.dialog.open(pt).afterClosed().subscribe(a=>{console.log("result: ",a)})}ngOnDestroy(){this.modal?.dismiss()}};t.\u0275fac=function(e){return new(e||t)(d(ht),d(k))},t.\u0275cmp=g({type:t,selectors:[["app-modal-guidelines"]],standalone:!0,features:[D],decls:38,vars:0,consts:[[1,"prose"],[1,"example"],[1,"button","button-primary",3,"click"],[1,"list-inside","list-disc"],[1,"text-block"],["href","https://atlassian.design/components/modal-dialog/usage#content-guidelines"]],template:function(e,n){e&1&&(o(0,"header")(1,"h1"),r(2,"Modal"),s(),o(3,"p",0),r(4,"Use a modal to capture information or acknowledgement from users immediately without having users lose context."),s()(),o(5,"article")(6,"h2"),r(7,"Example"),s(),o(8,"div",1)(9,"button",2),T("click",function(){return n.open()}),r(10,"Open"),s()()(),o(11,"article")(12,"h2"),r(13,"Best practices"),s(),o(14,"ul",3)(15,"li"),r(16,"Modals are invasive and should only be used sparingly"),s(),o(17,"li"),r(18,"Modals should be used for short-term tasks"),s(),o(19,"li"),r(20,"Avoid multiple steps inside a modal"),s(),o(21,"li"),r(22,"Avoid modal dialogs for complex decision making"),s(),o(23,"li"),r(24,"There should be at most one modal open at a given time"),s()(),o(25,"h3"),r(26,"Content guidelines"),s(),o(27,"p",4),r(28,"Guidelines are from "),o(29,"a",5),r(30,"Atlassian's content guidelines"),s()(),o(31,"ul",3)(32,"li"),r(33,"Modal dialog title should use sentence case and prioritize keywords"),s(),o(34,"li"),r(35,"Modal dialog body should only contain valuable and relevant information that is both helpful and concise"),s(),o(36,"li"),r(37,"Label elements with action verbs that indicate what happens when the element is selected. For example, label a select menu with Choose a user instead of Users."),s()()())},dependencies:[bt]});let i=t;return i})();export{me as ModalGuidelinesComponent};
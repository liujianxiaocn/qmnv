/*
该文档基于Jquery实现，仅用于前端动态效果
Update by Alex Liu @2019.02.27
Updated at 2019.03.04
*/
$(document).ready(function(){

    //########################
    //     装载和初始化类
    ////////////////////////////
    /*对有值数据预判，调整Label位置 */
    $('.input-field').each(function(i){
        if(this.value){
            $(this).closest('.input-group').addClass('has-value');
        }
    })

    /*选择框预判值存在*/
    $('.select-field').each(function(i){
        if(this.value){
            $(this).closest('.input-group').addClass('has-value');
        }
    })

    //########################
    //     动作和相应
    ////////////////////////////
    /*选择框操作行为设置*/
    $('.select-field').focus(function () {
        return $(this).closest('.input-group').addClass('focused has-value');
    })
    .focusout(function () {
        return $(this).closest('.input-group').removeClass('focused');
    })
    .blur(function () {
        if (!this.value) {
            $(this).closest('.input-group').removeClass('has-value');
        }
        return $(this).closest('.input-group').removeClass('focused');
    });


    /*银行卡号的键入规则设置 */
    $('.bank-card').on('keyup mouseout input',function(e){
        /*规则：
        1.4位中间+2个空格；
        2.仅接受字母和数字 */
      
        var $this = $(this),v = $this.val();
        /\S{5}/.test(v) && $this.val(v.replace(/\s/g,'').replace(/[^\w\.\/]/ig,'').replace(/(.{4})/g, "$1  "));

    });

    /*数值输入框的键入规则设置 */
    $('.quantity-num').on('keyup mouseout input',function(e){     
        var $this = $(this),v = $this.val();

        //先把非数字的都替换掉，除了数字和.
        v = v.replace(/[^\d.]/g,"");
        //必须保证第一个为数字而不是.
        v = v.replace(/^\./g,"");
        //保证只有出现一个.而没有多个.
        v = v.replace(/\.{2,}/g,".");
        //保证.只出现一次，而不能出现两次以上
        v = v.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        $this.val(v);
    });


    /*手机输入框的键入规则设置 */
    $('.mobile-number').on('keyup mouseout input',function(e){          
        var $this = $(this),v = $this.val();

        //仅保留数字
        v = v.replace(/[^\d]/g,"");
        //限制长度为11位
        v=v.substring(0,11);

        //增加DDD DDDD DDDD的分隔
        var mf=v.split("");
        var rt=new Array();
        for(let i in mf){
            rt.push(mf[i]);
            if(i==2||i==6){
                rt.push(" - ");
            }
        }
        $this.val(rt.join(""));
    });


    /*金额输入框的键入规则设置 */
    $('.currency-num').on('keyup mouseout input',function(e){     
        var $this = $(this),v = $this.val();

        //先把非数字的都替换掉，除了数字和.
        v = v.replace(/[^\d.]/g,"");
        //必须保证第一个为数字而不是.
        v = v.replace(/^\./g,"");
        //保证只有出现一个.而没有多个.
        v = v.replace(/\.{2,}/g,".");
        //保证.只出现一次，而不能出现两次以上
        v = v.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        $this.val(v);
    });

    /*日期的键入规则设置 */
    $('.date-setting').on('keyup mouseout input',function(e){          
        var $this = $(this),v = $this.val();

        //仅保留数字
        v = v.replace(/[^\d]/g,"");
        //限制长度为11位
        v=v.substring(0,8);

        //增加YYYY-MM-DD的分隔
        var mf=v.split("");
        var rt=new Array();
        for(let i in mf){
            rt.push(mf[i]);
            if(i==3||i==5){
                rt.push(" / ");
            }
        }
        $this.val(rt.join(""));
    });


    $('.wrap-file-upload').on('click',function(e){
        $(this).removeClass('has-value');
        $(this).addClass('has-value');
    });

    $('.file-selector').on('click',function(e){
        var hiddenFile=$(this).closest('.wrap-file-upload').children('input[type="file"]');
        hiddenFile.click();
    });

    $('.__hidden_input_file__').on('change',function(e){
        var fi=$(this)[0].value;
        var pos=fi.lastIndexOf('\\');
        fi=fi.substring(pos+1);
        $(this).closest('.wrap-file-upload').children('.file-list').children('.file-name').text(fi);
    });


    /*TAB控件*/
    $('.tab-item').on('click',function(e){
        $(this).siblings().each(function(i){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var tablink=$($(this).attr("tab-link"));
        tablink.siblings().each(function(j){
            $(this).removeClass('active');
        });
        tablink.addClass('active');
    });

   /*按钮*/
   $('.ripple-effect').make_rippleEffect();

}
);

(function($) {
    $.fn.make_rippleEffect = function() {
      var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;
  
      btn = $(this).not('[disabled], .disabled');
  
      btn.on('mousedown', function(e) {
        self = $(this);
  
        // Disable right click
        if(e.button === 2) {
          return false;
        }
  
        if(self.find('.ripple').length === 0) {
          self.prepend('<span class="ripple"></span>');
        }
        ripple = self.find('.ripple');
        ripple.removeClass('animated');
  
        eWidth = self.outerWidth();
        eHeight = self.outerHeight();
        size = Math.max(eWidth, eHeight);
        ripple.css({'width': size, 'height': size});
  
        rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
        rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);
  
        ripple.css({ 'top': rippleY +'px', 'left': rippleX +'px' }).addClass('animated');
  
        setTimeout(function() {
          ripple.remove();
        }, 800);
  
      });
    };
  }(jQuery));

  
(function(){
    var inputgroupation;
    inputgroupation = function () {
        return $('.input-field')
        .focus(function () {
            return $(this).closest('.input-group').addClass('focused has-value');
        })
        .focusout(function () {
            return $(this).closest('.input-group').removeClass('focused');
        })
        .blur(function () {
            if (!this.value) {
                $(this).closest('.input-group').removeClass('has-value');
            }
            return $(this).closest('.input-group').removeClass('focused');
        });
    };
    $(function () {
        return inputgroupation();
    });
}.call(this));



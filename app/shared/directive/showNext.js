
/**
 ** ".directive()" method is used for the making an element in the html which has a specific function in it
 ** "EA" represent that it is restricted for an element and an attribute
 ** on click function the directive will be fired and it will increment the index and call the state with the incremented index value
 ** since the value is incremented it can call the next page
 ****/


app.directive('showNext',function($state,constants1){
    return{
        restrict:"EA",
        link:function($scope,element,attrs){
            element.bind('click',function(){
                constants1.index++;
                if($state.current.name.indexOf(".")>0)
                {
                    $state.current.name=$state.current.name.replace(".modal","");
                }

                $state.go($state.current.name,{movieid: constants1.index});
            })
        }
    };
});

var arr = [1, 2, 3, 4, 5 ];

var Repeat = <div>
      {Repeat(arr, function(val){
        return <span>{val}</span>;
      })}
    </div>;
React.render(Repeat, mountNode);

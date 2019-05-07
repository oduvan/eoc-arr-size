requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        
        var io = new extIO({
            multipleArguments: true,
            functions: {
                python: 'arr_size',
                js: 'arrSize'
            }
        });
        io.start();
    }
);

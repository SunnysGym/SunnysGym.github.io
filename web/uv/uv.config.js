self.__uv$config = {
    prefix: '/web/sunnys/gym/',
    bare: 'https://homework.swat.lat',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/web/uv/uv.handler.js',
    bundle: '/web/uv/uv.bundle.js',
    config: '/web/uv/uv.config.js',
    sw: '/web/uv/uv.sw.js',
};

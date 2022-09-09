/*
*  Frappe Better Attach Control © 2022
*  Author:  Ameen Ahmed
*  Company: Level Up Marketing & Software Development Services
*  Licence: Please refer to license.txt
*/

var EXTS = {
    '3ds': 'image/x-3ds',
    'apng': 'image/apng',
    'avif': 'image/avif',
    'azv': 'image/vnd.airzip.accelerator.azv',
    'b16': 'image/vnd.pco.b16',
    'bmp': 'image/bmp',
    'cgm': 'image/cgm',
    'cmx': 'image/x-cmx',
    'dds': 'image/vnd.ms-dds',
    'djv': 'image/vnd.djvu',
    'djvu': 'image/vnd.djvu',
    'drle': 'image/dicom-rle',
    'dwg': 'image/vnd.dwg',
    'dxf': 'image/vnd.dxf',
    'emf': 'image/emf',
    'exr': 'image/aces',
    'fbs': 'image/vnd.fastbidsheet',
    'fh': 'image/x-freehand',
    'fh4': 'image/x-freehand',
    'fh5': 'image/x-freehand',
    'fh7': 'image/x-freehand',
    'fhc': 'image/x-freehand',
    'fits': 'image/fits',
    'fpx': 'image/vnd.fpx',
    'fst': 'image/vnd.fst',
    'g3': 'image/g3fax',
    'gif': 'image/gif',
    'heic': 'image/heic',
    'heics': 'image/heic-sequence',
    'heif': 'image/heif',
    'heifs': 'image/heif-sequence',
    'hej2': 'image/hej2k',
    'hsj2': 'image/hsj2',
    'ico': 'image/x-icon',
    'ief': 'image/ief',
    'jhc': 'image/jphc',
    'jls': 'image/jls',
    'jng': 'image/x-jng',
    'jp2': 'image/jp2',
    'jpe': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'jpf': 'image/jpx',
    'jpg': 'image/jpeg',
    'jpg2': 'image/jp2',
    'jph': 'image/jph',
    'jpm': 'image/jpm',
    'jpx': 'image/jpx',
    'jxr': 'image/jxr',
    'jxra': 'image/jxra',
    'jxrs': 'image/jxrs',
    'jxs': 'image/jxs',
    'jxsc': 'image/jxsc',
    'jxsi': 'image/jxsi',
    'jxss': 'image/jxss',
    'ktx': 'image/ktx',
    'ktx2': 'image/ktx2',
    'mdi': 'image/vnd.ms-modi',
    'mmr': 'image/vnd.fujixerox.edmics-mmr',
    'npx': 'image/vnd.net-fpx',
    'oga': 'image/vnd.dece.graphic',
    'ogg': 'image/vnd.dece.graphic',
    'pbm': 'image/x-portable-bitmap',
    'pct': 'image/x-pict',
    'pcx': 'image/x-pcx',
    'pgm': 'image/x-portable-graymap',
    'pic': 'image/x-pict',
    'png': 'image/png',
    'pnm': 'image/x-portable-anymap',
    'ppm': 'image/x-portable-pixmap',
    'psd': 'image/vnd.adobe.photoshop',
    'ras': 'image/x-cmu-raster',
    'rgb': 'image/x-rgb',
    'rlc': 'image/vnd.fujixerox.edmics-rlc',
    'sgi': 'image/sgi',
    'sid': 'image/x-mrsid-image',
    'spx': 'image/vnd.dece.graphic',
    'sub': 'image/vnd.dvb.subtitle',
    'svg': 'image/svg+xml',
    'svgz': 'image/svg+xml',
    'tga': 'image/x-tga',
    'tif': 'image/tiff',
    'tiff': 'image/tiff',
    'uvg': 'image/vnd.dece.graphic',
    'uvi': 'image/vnd.dece.graphic',
    'uvvg': 'image/vnd.dece.graphic',
    'uvvi': 'image/vnd.dece.graphic',
    'wbmp': 'image/vnd.wap.wbmp',
    'wdp': 'image/vnd.ms-photo',
    'webp': 'image/webp',
    'xbm': 'image/x-xbitmap',
    'xif': 'image/vnd.xiff',
    'xpm': 'image/x-xpixmap',
    'xwd': 'image/x-xwindowdump'
};

export function is_image(ext) {
    return !!EXTS[ext];
}
export function to_images_list(v) {
    let ret = [];
    v.forEach(function(d) {
        d = d.toLowerCase();
        if (d[0] === '.') d = d.substring(1, d.length);
        if (EXTS[d] && ret.indexOf(d) < 0) {
            ret.push(d);
            ret.push(EXTS[d]);
        }
    });
    return ret;
}
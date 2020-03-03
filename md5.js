module.exports = function md5(a) {
    var r = 0;
    return h(a);

    function h(t) {
        return u(l(m(t)))
    }

    function l(t) {
        return p(g(f(t), 8 * t.length))
    }

    function u(t) {
        for (var e, i = r ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < t.length; o++)
            e = t.charCodeAt(o),
            n += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
        return n
    }

    function m(t) {
        for (var e, i, n = "", o = -1; ++o < t.length;)
            e = t.charCodeAt(o),
            i = o + 1 < t.length ? t.charCodeAt(o + 1) : 0,
            55296 <= e && e <= 56319 && 56320 <= i && i <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & i),
                o++),
            e <= 127 ? n += String.fromCharCode(e) : e <= 2047 ? n += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? n += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (n += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        return n
    }

    function f(t) {
        for (var e = Array(t.length >> 2), i = 0; i < e.length; i++)
            e[i] = 0;
        for (i = 0; i < 8 * t.length; i += 8)
            e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
        return e
    }

    function p(t) {
        for (var e = "", i = 0; i < 32 * t.length; i += 8)
            e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
        return e
    }

    function g(t, e) {
        t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var i = 1732584193, n = -271733879, o = -1732584194, s = 271733878, a = 0; a < t.length; a += 16) {
            var r = i,
                c = n,
                h = o,
                l = s;
            n = E(n = E(n = E(n = E(n = N(n = N(n = N(n = N(n = C(n = C(n = C(n = C(n = S(n = S(n = S(n = S(n, o = S(o, s = S(s, i = S(i, n, o, s, t[a + 0], 7, -680876936), n, o, t[a + 1], 12, -389564586), i, n, t[a + 2], 17, 606105819), s, i, t[a + 3], 22, -1044525330), o = S(o, s = S(s, i = S(i, n, o, s, t[a + 4], 7, -176418897), n, o, t[a + 5], 12, 1200080426), i, n, t[a + 6], 17, -1473231341), s, i, t[a + 7], 22, -45705983), o = S(o, s = S(s, i = S(i, n, o, s, t[a + 8], 7, 1770035416), n, o, t[a + 9], 12, -1958414417), i, n, t[a + 10], 17, -42063), s, i, t[a + 11], 22, -1990404162), o = S(o, s = S(s, i = S(i, n, o, s, t[a + 12], 7, 1804603682), n, o, t[a + 13], 12, -40341101), i, n, t[a + 14], 17, -1502002290), s, i, t[a + 15], 22, 1236535329), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 1], 5, -165796510), n, o, t[a + 6], 9, -1069501632), i, n, t[a + 11], 14, 643717713), s, i, t[a + 0], 20, -373897302), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 5], 5, -701558691), n, o, t[a + 10], 9, 38016083), i, n, t[a + 15], 14, -660478335), s, i, t[a + 4], 20, -405537848), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 9], 5, 568446438), n, o, t[a + 14], 9, -1019803690), i, n, t[a + 3], 14, -187363961), s, i, t[a + 8], 20, 1163531501), o = C(o, s = C(s, i = C(i, n, o, s, t[a + 13], 5, -1444681467), n, o, t[a + 2], 9, -51403784), i, n, t[a + 7], 14, 1735328473), s, i, t[a + 12], 20, -1926607734), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 5], 4, -378558), n, o, t[a + 8], 11, -2022574463), i, n, t[a + 11], 16, 1839030562), s, i, t[a + 14], 23, -35309556), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 1], 4, -1530992060), n, o, t[a + 4], 11, 1272893353), i, n, t[a + 7], 16, -155497632), s, i, t[a + 10], 23, -1094730640), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 13], 4, 681279174), n, o, t[a + 0], 11, -358537222), i, n, t[a + 3], 16, -722521979), s, i, t[a + 6], 23, 76029189), o = N(o, s = N(s, i = N(i, n, o, s, t[a + 9], 4, -640364487), n, o, t[a + 12], 11, -421815835), i, n, t[a + 15], 16, 530742520), s, i, t[a + 2], 23, -995338651), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 0], 6, -198630844), n, o, t[a + 7], 10, 1126891415), i, n, t[a + 14], 15, -1416354905), s, i, t[a + 5], 21, -57434055), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 12], 6, 1700485571), n, o, t[a + 3], 10, -1894986606), i, n, t[a + 10], 15, -1051523), s, i, t[a + 1], 21, -2054922799), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 8], 6, 1873313359), n, o, t[a + 15], 10, -30611744), i, n, t[a + 6], 15, -1560198380), s, i, t[a + 13], 21, 1309151649), o = E(o, s = E(s, i = E(i, n, o, s, t[a + 4], 6, -145523070), n, o, t[a + 11], 10, -1120210379), i, n, t[a + 2], 15, 718787259), s, i, t[a + 9], 21, -343485551),
                i = v(i, r),
                n = v(n, c),
                o = v(o, h),
                s = v(s, l)
        }
        return [i, n, o, s]
    }

    function _(t, e, i, n, o, s) {
        return v((a = v(v(e, t), v(n, s))) << (r = o) | a >>> 32 - r, i);
        var a, r
    }

    function S(t, e, i, n, o, s, a) {
        return _(e & i | ~e & n, t, e, o, s, a)
    }

    function C(t, e, i, n, o, s, a) {
        return _(e & n | i & ~n, t, e, o, s, a)
    }

    function N(t, e, i, n, o, s, a) {
        return _(e ^ i ^ n, t, e, o, s, a)
    }

    function E(t, e, i, n, o, s, a) {
        return _(i ^ (e | ~n), t, e, o, s, a)
    }

    function v(t, e) {
        var i = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
    }
}

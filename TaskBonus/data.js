const countries = [
    { name: "Afghanistan", flag: "./images/af.svg" },
    { name: "Åland Islands", flag: "./images/ax.svg" },
    { name: "Albania", flag: "./images/al.svg" },
    { name: "Algeria", flag: "./images/dz.svg" },
    { name: "American Samoa", flag: "./images/as.svg" },
    { name: "Andorra", flag: "./images/ad.svg" },
    { name: "Angola", flag: "./images/ao.svg" },
    { name: "Anguilla", flag: "./images/ai.svg" },
    { name: "Antarctica", flag: "./images/aq.svg" },
    { name: "Antigua and Barbuda", flag: "./images/ag.svg" },
    { name: "Argentina", flag: "./images/ar.svg" },
    { name: "Armenia", flag: "./images/am.svg" },
    { name: "Aruba", flag: "./images/aw.svg" },
    { name: "Australia", flag: "./images/au.svg" },
    { name: "Austria", flag: "./images/at.svg" },
    { name: "Azerbaijan", flag: "./images/az.svg" },
    { name: "Bahamas", flag: "./images/bs.svg" },
    { name: "Bahrain", flag: "./images/bh.svg" },
    { name: "Bangladesh", flag: "./images/bd.svg" },
    { name: "Barbados", flag: "./images/bb.svg" },
    { name: "Belarus", flag: "./images/by.svg" },
    { name: "Belgium", flag: "./images/be.svg" },
    { name: "Belize", flag: "./images/bz.svg" },
    { name: "Benin", flag: "./images/bj.svg" },
    { name: "Bermuda", flag: "./images/bm.svg" },
    { name: "Bhutan", flag: "./images/bt.svg" },
    { name: "Bolivia", flag: "./images/bo.svg" },
    { name: "Bosnia and Herzegovina", flag: "./images/ba.svg" },
    { name: "Botswana", flag: "./images/bw.svg" },
    { name: "Bouvet Island", flag: "./images/bv.svg" },
    { name: "Brazil", flag: "./images/br.svg" },
    { name: "British Indian Ocean Territory", flag: "./images/io.svg" },
    { name: "Brunei", flag: "./images/bn.svg" },
    { name: "Bulgaria", flag: "./images/bg.svg" },
    { name: "Burkina Faso", flag: "./images/bf.svg" },
    { name: "Burundi", flag: "./images/bi.svg" },
    { name: "Cambodia", flag: "./images/kh.svg" },
    { name: "Cameroon", flag: "./images/cm.svg" },
    { name: "Canada", flag: "./images/ca.svg" },
    { name: "Cape Verde", flag: "./images/cv.svg" },
    { name: "Caribbean Netherlands", flag: "./images/bq.svg" },
    { name: "Cayman Islands", flag: "./images/ky.svg" },
    { name: "Central African Republic", flag: "./images/cf.svg" },
    { name: "Chad", flag: "./images/td.svg" },
    { name: "Chile", flag: "./images/cl.svg" },
    { name: "China", flag: "./images/cn.svg" },
    { name: "Christmas Island", flag: "./images/cx.svg" },
    { name: "Cocos Islands", flag: "./images/cc.svg" },
    { name: "Colombia", flag: "./images/co.svg" },
    { name: "Comoros", flag: "./images/km.svg" },
    { name: "Republic of the Congo", flag: "./images/cg.svg" },
    { name: "DR Congo", flag: "./images/cd.svg" },
    { name: "Cook Islands", flag: "./images/ck.svg" },
    { name: "Costa Rica", flag: "./images/cr.svg" },
    { name: "Côte d'Ivoire", flag: "./images/ci.svg" },
    { name: "Croatia", flag: "./images/hr.svg" },
    { name: "Cuba", flag: "./images/cu.svg" },
    { name: "Curaçao", flag: "./images/cw.svg" },
    { name: "Cyprus", flag: "./images/cy.svg" },
    { name: "Czechia", flag: "./images/cz.svg" },
    { name: "Denmark", flag: "./images/dk.svg" },
    { name: "Djibouti", flag: "./images/dj.svg" },
    { name: "Dominica", flag: "./images/dm.svg" },
    { name: "Dominican Republic", flag: "./images/do.svg" },
    { name: "Ecuador", flag: "./images/ec.svg" },
    { name: "Egypt", flag: "./images/eg.svg" },
    { name: "El Salvador", flag: "./images/sv.svg" },
    { name: "England", flag: "./images/england.svg" },
    { name: "Equatorial Guinea", flag: "./images/gq.svg" },
    { name: "Eritrea", flag: "./images/er.svg" },
    { name: "Estonia", flag: "./images/ee.svg" },
    { name: "Eswatini", flag: "./images/sz.svg" },
    { name: "Ethiopia", flag: "./images/et.svg" },
    { name: "Falkland Islands", flag: "./images/fk.svg" },
    { name: "Faroe Islands", flag: "./images/fo.svg" },
    { name: "Fiji", flag: "./images/fj.svg" },
    { name: "Finland", flag: "./images/fi.svg" },
    { name: "France", flag: "./images/fr.svg" },
    { name: "French Guiana", flag: "./images/gf.svg" },
    { name: "French Polynesia", flag: "./images/pf.svg" },
    { name: "French Southern and Antarctic Lands", flag: "./images/tf.svg" },
    { name: "Gabon", flag: "./images/ga.svg" },
    { name: "Gambia", flag: "./images/gm.svg" },
    { name: "Georgia", flag: "./images/ge.svg" },
    { name: "Germany", flag: "./images/de.svg" },
    { name: "Ghana", flag: "./images/gh.svg" },
    { name: "Gibraltar", flag: "./images/gi.svg" },
    { name: "Greece", flag: "./images/gr.svg" },
    { name: "Greenland", flag: "./images/gl.svg" },
    { name: "Grenada", flag: "./images/gd.svg" },
    { name: "Guadeloupe", flag: "./images/gp.svg" },
    { name: "Guam", flag: "./images/gu.svg" },
    { name: "Guatemala", flag: "./images/gt.svg" },
    { name: "Guernsey", flag: "./images/gg.svg" },
    { name: "Guinea", flag: "./images/gn.svg" },
    { name: "Guinea-Bissau", flag: "./images/gw.svg" },
    { name: "Guyana", flag: "./images/gy.svg" },
    { name: "Haiti", flag: "./images/ht.svg" },
    { name: "Heard Island and McDonald Islands", flag: "./images/hm.svg" },
    { name: "Honduras", flag: "./images/hn.svg" },
    { name: "Hong Kong", flag: "./images/hk.svg" },
    { name: "Hungary", flag: "./images/hu.svg" },
    { name: "Iceland", flag: "./images/is.svg" },
    { name: "India", flag: "./images/in.svg" },
    { name: "Indonesia", flag: "./images/id.svg" },
    { name: "Iran", flag: "./images/ir.svg" },
    { name: "Iraq", flag: "./images/iq.svg" },
    { name: "Ireland", flag: "./images/ie.svg" },
    { name: "Isle of Man", flag: "./images/im.svg" },
    { name: "Israel", flag: "./images/il.svg" },
    { name: "Italy", flag: "./images/it.svg" },
    { name: "Jamaica", flag: "./images/jm.svg" },
    { name: "Japan", flag: "./images/jp.svg" },
    { name: "Jersey", flag: "./images/je.svg" },
    { name: "Jordan", flag: "./images/jo.svg" },
    { name: "Kazakhstan", flag: "./images/kz.svg" },
    { name: "Kenya", flag: "./images/ke.svg" },
    { name: "Kiribati", flag: "./images/ki.svg" },
    { name: "North Korea", flag: "./images/kp.svg" },
    { name: "South Korea", flag: "./images/kr.svg" },
    { name: "Kosovo", flag: "./images/xk.svg" },
    { name: "Kuwait", flag: "./images/kw.svg" },
    { name: "Kyrgyzstan", flag: "./images/kg.svg" },
    { name: "Laos", flag: "./images/la.svg" },
    { name: "Latvia", flag: "./images/lv.svg" },
    { name: "Lebanon", flag: "./images/lb.svg" },
    { name: "Lesotho", flag: "./images/ls.svg" },
    { name: "Liberia", flag: "./images/lr.svg" },
    { name: "Libya", flag: "./images/ly.svg" },
    { name: "Liechtenstein", flag: "./images/li.svg" },
    { name: "Lithuania", flag: "./images/lt.svg" },
    { name: "Luxembourg", flag: "./images/lu.svg" },
    { name: "Macau", flag: "./images/mo.svg" },
    { name: "Madagascar", flag: "./images/mg.svg" },
    { name: "Malawi", flag: "./images/mw.svg" },
    { name: "Malaysia", flag: "./images/my.svg" },
    { name: "Maldives", flag: "./images/mv.svg" },
    { name: "Mali", flag: "./images/ml.svg" },
    { name: "Malta", flag: "./images/mt.svg" },
    { name: "Marshall Islands", flag: "./images/mh.svg" },
    { name: "Martinique", flag: "./images/mq.svg" },
    { name: "Mauritania", flag: "./images/mr.svg" },
    { name: "Mauritius", flag: "./images/mu.svg" },
    { name: "Mayotte", flag: "./images/yt.svg" },
    { name: "Mexico", flag: "./images/mx.svg" },
    { name: "Micronesia", flag: "./images/fm.svg" },
    { name: "Moldova", flag: "./images/md.svg" },
    { name: "Monaco", flag: "./images/mc.svg" },
    { name: "Mongolia", flag: "./images/mn.svg" },
    { name: "Montenegro", flag: "./images/me.svg" },
    { name: "Montserrat", flag: "./images/ms.svg" },
    { name: "Morocco", flag: "./images/ma.svg" },
    { name: "Mozambique", flag: "./images/mz.svg" },
    { name: "Myanmar", flag: "./images/mm.svg" },
    { name: "Namibia", flag: "./images/na.svg" },
    { name: "Nauru", flag: "./images/nr.svg" },
    { name: "Nepal", flag: "./images/np.svg" },
    { name: "Netherlands", flag: "./images/nl.svg" },
    { name: "New Caledonia", flag: "./images/nc.svg" },
    { name: "New Zealand", flag: "./images/nz.svg" },
    { name: "Nicaragua", flag: "./images/ni.svg" },
    { name: "Niger", flag: "./images/ne.svg" },
    { name: "Nigeria", flag: "./images/ng.svg" },
    { name: "Niue", flag: "./images/nu.svg" },
    { name: "Norfolk Island", flag: "./images/nf.svg" },
    { name: "North Macedonia", flag: "./images/mk.svg" },
    { name: "Northern Ireland", flag: "./images/northern_ireland.svg" },
    { name: "Northern Mariana Islands", flag: "./images/mp.svg" },
    { name: "Norway", flag: "./images/no.svg" },
    { name: "Oman", flag: "./images/om.svg" },
    { name: "Pakistan", flag: "./images/pk.svg" },
    { name: "Palau", flag: "./images/pw.svg" },
    { name: "Palestine", flag: "./images/ps.svg" },
    { name: "Panama", flag: "./images/pa.svg" },
    { name: "Papua New Guinea", flag: "./images/pg.svg" },
    { name: "Paraguay", flag: "./images/py.svg" },
    { name: "Peru", flag: "./images/pe.svg" },
    { name: "Philippines", flag: "./images/ph.svg" },
    { name: "Pitcairn Islands", flag: "./images/pn.svg" },
    { name: "Poland", flag: "./images/pl.svg" },
    { name: "Portugal", flag: "./images/pt.svg" },
    { name: "Puerto Rico", flag: "./images/pr.svg" },
    { name: "Qatar", flag: "./images/qa.svg" },
    { name: "Réunion", flag: "./images/re.svg" },
    { name: "Romania", flag: "./images/ro.svg" },
    { name: "Russia", flag: "./images/ru.svg" },
    { name: "Rwanda", flag: "./images/rw.svg" },
    { name: "Saint Barthélemy", flag: "./images/bl.svg" },
    { name: "Saint Helena, Ascension and Tristan da Cunha", flag: "./images/sh.svg" },
    { name: "Saint Kitts and Nevis", flag: "./images/kn.svg" },
    { name: "Saint Lucia", flag: "./images/lc.svg" },
    { name: "Saint Martin", flag: "./images/mf.svg" },
    { name: "Saint Pierre and Miquelon", flag: "./images/pm.svg" },
    { name: "Saint Vincent and the Grenadines", flag: "./images/vc.svg" },
    { name: "Samoa", flag: "./images/ws.svg" },
    { name: "San Marino", flag: "./images/sm.svg" },
    { name: "São Tomé and Príncipe", flag: "./images/st.svg" },
    { name: "Saudi Arabia", flag: "./images/sa.svg" },
    { name: "Scotland", flag: "./images/scotland.svg" },
    { name: "Senegal", flag: "./images/sn.svg" },
    { name: "Serbia", flag: "./images/rs.svg" },
    { name: "Seychelles", flag: "./images/sc.svg" },
    { name: "Sierra Leone", flag: "./images/sl.svg" },
    { name: "Singapore", flag: "./images/sg.svg" },
    { name: "Sint Maarten", flag: "./images/sx.svg" },
    { name: "Slovakia", flag: "./images/sk.svg" },
    { name: "Slovenia", flag: "./images/si.svg" },
    { name: "Solomon Islands", flag: "./images/sb.svg" },
    { name: "Somalia", flag: "./images/so.svg" },
    { name: "South Africa", flag: "./images/za.svg" },
    { name: "South Georgia", flag: "./images/gs.svg" },
    { name: "South Sudan", flag: "./images/ss.svg" },
    { name: "Spain", flag: "./images/es.svg" },
    { name: "Sri Lanka", flag: "./images/lk.svg" },
    { name: "Sudan", flag: "./images/sd.svg" },
    { name: "Suriname", flag: "./images/sr.svg" },
    { name: "Svalbard and Jan Mayen", flag: "./images/sj.svg" },
    { name: "Sweden", flag: "./images/se.svg" },
    { name: "Switzerland", flag: "./images/ch.svg" },
    { name: "Syria", flag: "./images/sy.svg" },
    { name: "Taiwan", flag: "./images/tw.svg" },
    { name: "Tajikistan", flag: "./images/tj.svg" },
    { name: "Tanzania", flag: "./images/tz.svg" },
    { name: "Thailand", flag: "./images/th.svg" },
    { name: "Timor-Leste", flag: "./images/tl.svg" },
    { name: "Togo", flag: "./images/tg.svg" },
    { name: "Tokelau", flag: "./images/tk.svg" },
    { name: "Tonga", flag: "./images/to.svg" },
    { name: "Trinidad and Tobago", flag: "./images/tt.svg" },
    { name: "Tunisia", flag: "./images/tn.svg" },
    { name: "Turkey", flag: "./images/tr.svg" },
    { name: "Turkmenistan", flag: "./images/tm.svg" },
    { name: "Turks and Caicos Islands", flag: "./images/tc.svg" },
    { name: "Tuvalu", flag: "./images/tv.svg" },
    { name: "Uganda", flag: "./images/ug.svg" },
    { name: "Ukraine", flag: "./images/ua.svg" },
    { name: "United Arab Emirates", flag: "./images/ae.svg" },
    { name: "United Kingdom", flag: "./images/gb.svg" },
    { name: "United States", flag: "./images/us.svg" },
    { name: "Uruguay", flag: "./images/uy.svg" },
    { name: "Uzbekistan", flag: "./images/uz.svg" },
    { name: "Vanuatu", flag: "./images/vu.svg" },
    { name: "Vatican City", flag: "./images/va.svg" },
    { name: "Venezuela", flag: "./images/ve.svg" },
    { name: "Vietnam", flag: "./images/vn.svg" },
    { name: "Wales", flag: "./images/wales.svg" },
    { name: "Western Sahara", flag: "./images/eh.svg" },
    { name: "Yemen", flag: "./images/ye.svg" },
    { name: "Zambia", flag: "./images/zm.svg" },
    { name: "Zimbabwe", flag: "./images/zw.svg" }
];

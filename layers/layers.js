ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([117.178001, 15.861083, 123.615210, 18.967255]);
var wms_layers = [];

var format_SeedDispersal_0 = new ol.format.GeoJSON();
var features_SeedDispersal_0 = format_SeedDispersal_0.readFeatures(json_SeedDispersal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SeedDispersal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeedDispersal_0.addFeatures(features_SeedDispersal_0);
var lyr_SeedDispersal_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeedDispersal_0, 
                style: style_SeedDispersal_0,
                interactive: true,
    title: 'Seed Dispersal<br />\
    <img src="styles/legend/SeedDispersal_0_0.png" /> <br />\
    <img src="styles/legend/SeedDispersal_0_1.png" /> Adams<br />\
    <img src="styles/legend/SeedDispersal_0_2.png" /> Agno<br />\
    <img src="styles/legend/SeedDispersal_0_3.png" /> Agoo<br />\
    <img src="styles/legend/SeedDispersal_0_4.png" /> Aguilar<br />\
    <img src="styles/legend/SeedDispersal_0_5.png" /> Alaminos City<br />\
    <img src="styles/legend/SeedDispersal_0_6.png" /> Alcala<br />\
    <img src="styles/legend/SeedDispersal_0_7.png" /> Alilem<br />\
    <img src="styles/legend/SeedDispersal_0_8.png" /> Anda<br />\
    <img src="styles/legend/SeedDispersal_0_9.png" /> Aringay<br />\
    <img src="styles/legend/SeedDispersal_0_10.png" /> Asingan<br />\
    <img src="styles/legend/SeedDispersal_0_11.png" /> Bacarra<br />\
    <img src="styles/legend/SeedDispersal_0_12.png" /> Bacnotan<br />\
    <img src="styles/legend/SeedDispersal_0_13.png" /> Badoc<br />\
    <img src="styles/legend/SeedDispersal_0_14.png" /> Bagulin<br />\
    <img src="styles/legend/SeedDispersal_0_15.png" /> Balaoan<br />\
    <img src="styles/legend/SeedDispersal_0_16.png" /> Balungao<br />\
    <img src="styles/legend/SeedDispersal_0_17.png" /> Banayoyo<br />\
    <img src="styles/legend/SeedDispersal_0_18.png" /> Bangar<br />\
    <img src="styles/legend/SeedDispersal_0_19.png" /> Bangui<br />\
    <img src="styles/legend/SeedDispersal_0_20.png" /> Bani<br />\
    <img src="styles/legend/SeedDispersal_0_21.png" /> Banna<br />\
    <img src="styles/legend/SeedDispersal_0_22.png" /> Bantay<br />\
    <img src="styles/legend/SeedDispersal_0_23.png" /> Basista<br />\
    <img src="styles/legend/SeedDispersal_0_24.png" /> Batac City<br />\
    <img src="styles/legend/SeedDispersal_0_25.png" /> Bauang<br />\
    <img src="styles/legend/SeedDispersal_0_26.png" /> Bautista<br />\
    <img src="styles/legend/SeedDispersal_0_27.png" /> Bayambang<br />\
    <img src="styles/legend/SeedDispersal_0_28.png" /> Binalonan<br />\
    <img src="styles/legend/SeedDispersal_0_29.png" /> Binmaley<br />\
    <img src="styles/legend/SeedDispersal_0_30.png" /> Bolinao<br />\
    <img src="styles/legend/SeedDispersal_0_31.png" /> Bugallon<br />\
    <img src="styles/legend/SeedDispersal_0_32.png" /> Burgos (IN)<br />\
    <img src="styles/legend/SeedDispersal_0_33.png" /> Burgos (IS)<br />\
    <img src="styles/legend/SeedDispersal_0_34.png" /> Burgos (LU)<br />\
    <img src="styles/legend/SeedDispersal_0_35.png" /> Burgos (P)<br />\
    <img src="styles/legend/SeedDispersal_0_36.png" /> Caba<br />\
    <img src="styles/legend/SeedDispersal_0_37.png" /> Cabugao<br />\
    <img src="styles/legend/SeedDispersal_0_38.png" /> Calasiao<br />\
    <img src="styles/legend/SeedDispersal_0_39.png" /> Candon City<br />\
    <img src="styles/legend/SeedDispersal_0_40.png" /> Caoayan<br />\
    <img src="styles/legend/SeedDispersal_0_41.png" /> Carasi<br />\
    <img src="styles/legend/SeedDispersal_0_42.png" /> Cervantes<br />\
    <img src="styles/legend/SeedDispersal_0_43.png" /> Currimao<br />\
    <img src="styles/legend/SeedDispersal_0_44.png" /> Dagupan City<br />\
    <img src="styles/legend/SeedDispersal_0_45.png" /> Dasol<br />\
    <img src="styles/legend/SeedDispersal_0_46.png" /> Dingras<br />\
    <img src="styles/legend/SeedDispersal_0_47.png" /> Dumalneg<br />\
    <img src="styles/legend/SeedDispersal_0_48.png" /> Galimuyod<br />\
    <img src="styles/legend/SeedDispersal_0_49.png" /> Gregorio Del Pilar<br />\
    <img src="styles/legend/SeedDispersal_0_50.png" /> Infanta<br />\
    <img src="styles/legend/SeedDispersal_0_51.png" /> Labrador<br />\
    <img src="styles/legend/SeedDispersal_0_52.png" /> Laoac<br />\
    <img src="styles/legend/SeedDispersal_0_53.png" /> Laoag City<br />\
    <img src="styles/legend/SeedDispersal_0_54.png" /> Lidlidda<br />\
    <img src="styles/legend/SeedDispersal_0_55.png" /> Lingayen<br />\
    <img src="styles/legend/SeedDispersal_0_56.png" /> Luna<br />\
    <img src="styles/legend/SeedDispersal_0_57.png" /> Mabini<br />\
    <img src="styles/legend/SeedDispersal_0_58.png" /> Magsingal<br />\
    <img src="styles/legend/SeedDispersal_0_59.png" /> Malasiqui<br />\
    <img src="styles/legend/SeedDispersal_0_60.png" /> Manaoag<br />\
    <img src="styles/legend/SeedDispersal_0_61.png" /> Mangaldan<br />\
    <img src="styles/legend/SeedDispersal_0_62.png" /> Mangatarem<br />\
    <img src="styles/legend/SeedDispersal_0_63.png" /> Mapandan<br />\
    <img src="styles/legend/SeedDispersal_0_64.png" /> Marcos<br />\
    <img src="styles/legend/SeedDispersal_0_65.png" /> Nagbukel<br />\
    <img src="styles/legend/SeedDispersal_0_66.png" /> Naguilian<br />\
    <img src="styles/legend/SeedDispersal_0_67.png" /> Narvacan<br />\
    <img src="styles/legend/SeedDispersal_0_68.png" /> Natividad<br />\
    <img src="styles/legend/SeedDispersal_0_69.png" /> Nueva Era<br />\
    <img src="styles/legend/SeedDispersal_0_70.png" /> Pagudpud<br />\
    <img src="styles/legend/SeedDispersal_0_71.png" /> Paoay<br />\
    <img src="styles/legend/SeedDispersal_0_72.png" /> Paoay Lake<br />\
    <img src="styles/legend/SeedDispersal_0_73.png" /> Pasuquin<br />\
    <img src="styles/legend/SeedDispersal_0_74.png" /> Piddig<br />\
    <img src="styles/legend/SeedDispersal_0_75.png" /> Pinili<br />\
    <img src="styles/legend/SeedDispersal_0_76.png" /> Pozzorubio<br />\
    <img src="styles/legend/SeedDispersal_0_77.png" /> Pugo<br />\
    <img src="styles/legend/SeedDispersal_0_78.png" /> Quirino<br />\
    <img src="styles/legend/SeedDispersal_0_79.png" /> Rosales<br />\
    <img src="styles/legend/SeedDispersal_0_80.png" /> Rosario<br />\
    <img src="styles/legend/SeedDispersal_0_81.png" /> Salcedo<br />\
    <img src="styles/legend/SeedDispersal_0_82.png" /> San Carlos City<br />\
    <img src="styles/legend/SeedDispersal_0_83.png" /> San Emilio<br />\
    <img src="styles/legend/SeedDispersal_0_84.png" /> San Esteban<br />\
    <img src="styles/legend/SeedDispersal_0_85.png" /> San Fabian<br />\
    <img src="styles/legend/SeedDispersal_0_86.png" /> San Fernando City<br />\
    <img src="styles/legend/SeedDispersal_0_87.png" /> San Gabriel<br />\
    <img src="styles/legend/SeedDispersal_0_88.png" /> San Ildefonso<br />\
    <img src="styles/legend/SeedDispersal_0_89.png" /> San Jacinto<br />\
    <img src="styles/legend/SeedDispersal_0_90.png" /> San Juan<br />\
    <img src="styles/legend/SeedDispersal_0_91.png" /> San Manuel<br />\
    <img src="styles/legend/SeedDispersal_0_92.png" /> San Nicolas<br />\
    <img src="styles/legend/SeedDispersal_0_93.png" /> San Nicolas (IN)<br />\
    <img src="styles/legend/SeedDispersal_0_94.png" /> San Quintin<br />\
    <img src="styles/legend/SeedDispersal_0_95.png" /> San Vicente<br />\
    <img src="styles/legend/SeedDispersal_0_96.png" /> Santa<br />\
    <img src="styles/legend/SeedDispersal_0_97.png" /> Santa Barbara<br />\
    <img src="styles/legend/SeedDispersal_0_98.png" /> Santa Catalina<br />\
    <img src="styles/legend/SeedDispersal_0_99.png" /> Santa Cruz<br />\
    <img src="styles/legend/SeedDispersal_0_100.png" /> Santa Lucia<br />\
    <img src="styles/legend/SeedDispersal_0_101.png" /> Santa Maria (IS)<br />\
    <img src="styles/legend/SeedDispersal_0_102.png" /> Santa Maria (P)<br />\
    <img src="styles/legend/SeedDispersal_0_103.png" /> Santiago<br />\
    <img src="styles/legend/SeedDispersal_0_104.png" /> Santo Domingo<br />\
    <img src="styles/legend/SeedDispersal_0_105.png" /> Santo Tomas<br />\
    <img src="styles/legend/SeedDispersal_0_106.png" /> Santol<br />\
    <img src="styles/legend/SeedDispersal_0_107.png" /> Sarrat<br />\
    <img src="styles/legend/SeedDispersal_0_108.png" /> Sigay<br />\
    <img src="styles/legend/SeedDispersal_0_109.png" /> Sinait<br />\
    <img src="styles/legend/SeedDispersal_0_110.png" /> Sison<br />\
    <img src="styles/legend/SeedDispersal_0_111.png" /> Solsona<br />\
    <img src="styles/legend/SeedDispersal_0_112.png" /> Sual<br />\
    <img src="styles/legend/SeedDispersal_0_113.png" /> Sudipen<br />\
    <img src="styles/legend/SeedDispersal_0_114.png" /> Sugpon<br />\
    <img src="styles/legend/SeedDispersal_0_115.png" /> Suyo<br />\
    <img src="styles/legend/SeedDispersal_0_116.png" /> Tagudin<br />\
    <img src="styles/legend/SeedDispersal_0_117.png" /> Tayug<br />\
    <img src="styles/legend/SeedDispersal_0_118.png" /> Tubao<br />\
    <img src="styles/legend/SeedDispersal_0_119.png" /> Umingan<br />\
    <img src="styles/legend/SeedDispersal_0_120.png" /> Urbiztondo<br />\
    <img src="styles/legend/SeedDispersal_0_121.png" /> Urdaneta City<br />\
    <img src="styles/legend/SeedDispersal_0_122.png" /> Vigan City<br />\
    <img src="styles/legend/SeedDispersal_0_123.png" /> Villasis<br />\
    <img src="styles/legend/SeedDispersal_0_124.png" /> Vintar<br />\
    <img src="styles/legend/SeedDispersal_0_125.png" /> San Juan (IS)<br />\
    <img src="styles/legend/SeedDispersal_0_126.png" /> San Juan (LU)<br />\
    <img src="styles/legend/SeedDispersal_0_127.png" /> San Nicolas (P)<br />\
    <img src="styles/legend/SeedDispersal_0_128.png" /> Santo Tomas (LU)<br />\
    <img src="styles/legend/SeedDispersal_0_129.png" /> Santo Tomas (P)<br />'
        });

lyr_SeedDispersal_0.setVisible(true);
var layersList = [lyr_SeedDispersal_0];
lyr_SeedDispersal_0.set('fieldAliases', {'fid': 'fid', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NSIC Rc 510': 'NSIC Rc 510', 'NSIC Rc 512': 'NSIC Rc 512', 'Ballatinao': 'Ballatinao', 'NSIC Rc 13': 'NSIC Rc 13', 'NSIC Rc 514': 'NSIC Rc 514', 'NSIC Rc 336': 'NSIC Rc 336', 'NSIC Rc 508': 'NSIC Rc 508', 'NSIC Rc 506': 'NSIC Rc 506', 'NSIC Rc 480': 'NSIC Rc 480', 'NSIC Rc 222': 'NSIC Rc 222', 'NSIC Rc 402': 'NSIC Rc 402', 'NSIC Rc 426': 'NSIC Rc 426', 'NSIC Rc 216': 'NSIC Rc 216', 'NSIC Rc 466': 'NSIC Rc 466', 'NSIC Rc 462': 'NSIC Rc 462', 'Jasmine': 'Jasmine', 'CL-1': 'CL-1', 'CL-4': 'CL-4', 'NSIC Rc 420': 'NSIC Rc 420', });
lyr_SeedDispersal_0.set('fieldImages', {'fid': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NSIC Rc 510': 'Range', 'NSIC Rc 512': 'Range', 'Ballatinao': 'Range', 'NSIC Rc 13': 'Range', 'NSIC Rc 514': 'Range', 'NSIC Rc 336': 'Range', 'NSIC Rc 508': 'Range', 'NSIC Rc 506': 'Range', 'NSIC Rc 480': 'Range', 'NSIC Rc 222': 'Range', 'NSIC Rc 402': 'Range', 'NSIC Rc 426': 'Range', 'NSIC Rc 216': 'Range', 'NSIC Rc 466': 'Range', 'NSIC Rc 462': 'Range', 'Jasmine': 'Range', 'CL-1': 'Range', 'CL-4': 'Range', 'NSIC Rc 420': 'Range', });
lyr_SeedDispersal_0.set('fieldLabels', {'fid': 'hidden field', 'ISO': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'NSIC Rc 510': 'inline label - visible with data', 'NSIC Rc 512': 'inline label - visible with data', 'Ballatinao': 'inline label - visible with data', 'NSIC Rc 13': 'inline label - visible with data', 'NSIC Rc 514': 'inline label - visible with data', 'NSIC Rc 336': 'inline label - visible with data', 'NSIC Rc 508': 'inline label - visible with data', 'NSIC Rc 506': 'inline label - visible with data', 'NSIC Rc 480': 'inline label - visible with data', 'NSIC Rc 222': 'inline label - visible with data', 'NSIC Rc 402': 'inline label - visible with data', 'NSIC Rc 426': 'inline label - visible with data', 'NSIC Rc 216': 'inline label - visible with data', 'NSIC Rc 466': 'inline label - visible with data', 'NSIC Rc 462': 'inline label - visible with data', 'Jasmine': 'inline label - visible with data', 'CL-1': 'inline label - visible with data', 'CL-4': 'inline label - visible with data', 'NSIC Rc 420': 'inline label - visible with data', });
lyr_SeedDispersal_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
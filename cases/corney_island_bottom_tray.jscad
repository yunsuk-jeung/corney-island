function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[91,-112.15],[124.9385238,-112.15]]).appendArc([125.3160403,-112.3221567],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([138.1985219,-127.1565293]).appendArc([140.0097034,-128.2889023],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([191.3140961,-142.0358728]).appendArc([195.4197783,-140.3352436],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([206.1609927,-121.7309145]).appendArc([206.65,-119.9059145],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([206.65,-58]).appendArc([203,-54.35],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([185.15,-54.35]).appendArc([184.65,-53.85],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.65,-53.25]).appendArc([181,-49.6],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([166.6224129,-49.6]).appendArc([166.1859776,-49.3439759],{"radius":0.5,"clockwise":true,"large":false}).appendArc([163,-47.475],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([149.15,-47.475]).appendArc([148.65,-46.975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.65,-44.75]).appendArc([145,-41.1],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([127,-41.1]).appendArc([123.8140224,-42.9689759],{"radius":3.65,"clockwise":false,"large":false}).appendArc([123.3775871,-43.225],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([109,-43.225]).appendArc([105.35,-46.875],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([105.35,-53.35]).appendArc([104.85,-53.85],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([91,-53.85]).appendArc([87.35,-57.5],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([87.35,-108.5]).appendArc([91,-112.15],{"radius":3.65,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91,-109.75],[125.9189758,-109.75]]).appendArc([126.4852506,-110.008235],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([140.0106014,-125.5828814]).appendArc([140.630869,-125.9706803],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([191.9352618,-139.7176509]).appendArc([193.3413174,-139.1352436],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([204.0825318,-120.5309145]).appendArc([204.25,-119.9059145],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([204.25,-58]).appendArc([203,-56.75],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([183,-56.75]).appendArc([182.25,-56],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([182.25,-53.25]).appendArc([181,-52],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([165,-52]).appendArc([164.25,-51.25],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([164.25,-51.125]).appendArc([163,-49.875],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([147,-49.875]).appendArc([146.25,-49.125],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([146.25,-44.75]).appendArc([145,-43.5],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([127,-43.5]).appendArc([125.75,-44.75],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([125.75,-44.875]).appendArc([125,-45.625],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([109,-45.625]).appendArc([107.75,-46.875],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([107.75,-55.5]).appendArc([107,-56.25],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([91,-56.25]).appendArc([89.75,-57.5],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([89.75,-108.5]).appendArc([91,-109.75],{"radius":1.25,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[91,-112.15],[124.9385238,-112.15]]).appendArc([125.3160403,-112.3221567],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([138.1985219,-127.1565293]).appendArc([140.0097034,-128.2889023],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([191.3140961,-142.0358728]).appendArc([195.4197783,-140.3352436],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([206.1609927,-121.7309145]).appendArc([206.65,-119.9059145],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([206.65,-58]).appendArc([203,-54.35],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([185.15,-54.35]).appendArc([184.65,-53.85],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.65,-53.25]).appendArc([181,-49.6],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([166.6224129,-49.6]).appendArc([166.1859776,-49.3439759],{"radius":0.5,"clockwise":true,"large":false}).appendArc([163,-47.475],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([149.15,-47.475]).appendArc([148.65,-46.975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([148.65,-44.75]).appendArc([145,-41.1],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([127,-41.1]).appendArc([123.8140224,-42.9689759],{"radius":3.65,"clockwise":false,"large":false}).appendArc([123.3775871,-43.225],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([109,-43.225]).appendArc([105.35,-46.875],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([105.35,-53.35]).appendArc([104.85,-53.85],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([91,-53.85]).appendArc([87.35,-57.5],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([87.35,-108.5]).appendArc([91,-112.15],{"radius":3.65,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[181.1865886,-112.8880038],"radius":1.1})
.union(
    CAG.circle({"center":[141.4,-107.65],"radius":1.1})
).union(
    CAG.circle({"center":[163,-68.125],"radius":1.1})
).union(
    CAG.circle({"center":[109,-91.5],"radius":1.1})
).union(
    CAG.circle({"center":[109,-74.5],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function corney_island_bottom_tray_case_fn() {
                    

                // creating part 0 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_0_bounds = corney_island_bottom_tray__part_0.getBounds();
                let corney_island_bottom_tray__part_0_x = corney_island_bottom_tray__part_0_bounds[0].x + (corney_island_bottom_tray__part_0_bounds[1].x - corney_island_bottom_tray__part_0_bounds[0].x) / 2
                let corney_island_bottom_tray__part_0_y = corney_island_bottom_tray__part_0_bounds[0].y + (corney_island_bottom_tray__part_0_bounds[1].y - corney_island_bottom_tray__part_0_bounds[0].y) / 2
                corney_island_bottom_tray__part_0 = translate([-corney_island_bottom_tray__part_0_x, -corney_island_bottom_tray__part_0_y, 0], corney_island_bottom_tray__part_0);
                corney_island_bottom_tray__part_0 = rotate([0,0,0], corney_island_bottom_tray__part_0);
                corney_island_bottom_tray__part_0 = translate([corney_island_bottom_tray__part_0_x, corney_island_bottom_tray__part_0_y, 0], corney_island_bottom_tray__part_0);

                corney_island_bottom_tray__part_0 = translate([-75,0,0], corney_island_bottom_tray__part_0);
                let result = corney_island_bottom_tray__part_0;
                
            

                // creating part 1 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_1 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_1_bounds = corney_island_bottom_tray__part_1.getBounds();
                let corney_island_bottom_tray__part_1_x = corney_island_bottom_tray__part_1_bounds[0].x + (corney_island_bottom_tray__part_1_bounds[1].x - corney_island_bottom_tray__part_1_bounds[0].x) / 2
                let corney_island_bottom_tray__part_1_y = corney_island_bottom_tray__part_1_bounds[0].y + (corney_island_bottom_tray__part_1_bounds[1].y - corney_island_bottom_tray__part_1_bounds[0].y) / 2
                corney_island_bottom_tray__part_1 = translate([-corney_island_bottom_tray__part_1_x, -corney_island_bottom_tray__part_1_y, 0], corney_island_bottom_tray__part_1);
                corney_island_bottom_tray__part_1 = rotate([0,0,0], corney_island_bottom_tray__part_1);
                corney_island_bottom_tray__part_1 = translate([corney_island_bottom_tray__part_1_x, corney_island_bottom_tray__part_1_y, 0], corney_island_bottom_tray__part_1);

                corney_island_bottom_tray__part_1 = translate([-75,0,0], corney_island_bottom_tray__part_1);
                result = result.union(corney_island_bottom_tray__part_1);
                
            

                // creating part 2 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_2 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_2_bounds = corney_island_bottom_tray__part_2.getBounds();
                let corney_island_bottom_tray__part_2_x = corney_island_bottom_tray__part_2_bounds[0].x + (corney_island_bottom_tray__part_2_bounds[1].x - corney_island_bottom_tray__part_2_bounds[0].x) / 2
                let corney_island_bottom_tray__part_2_y = corney_island_bottom_tray__part_2_bounds[0].y + (corney_island_bottom_tray__part_2_bounds[1].y - corney_island_bottom_tray__part_2_bounds[0].y) / 2
                corney_island_bottom_tray__part_2 = translate([-corney_island_bottom_tray__part_2_x, -corney_island_bottom_tray__part_2_y, 0], corney_island_bottom_tray__part_2);
                corney_island_bottom_tray__part_2 = rotate([0,0,0], corney_island_bottom_tray__part_2);
                corney_island_bottom_tray__part_2 = translate([corney_island_bottom_tray__part_2_x, corney_island_bottom_tray__part_2_y, 0], corney_island_bottom_tray__part_2);

                corney_island_bottom_tray__part_2 = translate([-75,0,0], corney_island_bottom_tray__part_2);
                result = result.subtract(corney_island_bottom_tray__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return corney_island_bottom_tray_case_fn();
            }

        
function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[91,-112.15],[124.8217334,-112.15]]).appendArc([125.2183881,-112.3455906],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([138.7420098,-129.9672793]).appendArc([139.0092548,-130.1458328],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([193.648816,-144.7864592]).appendArc([194.2112382,-144.5534963],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.5830127,-123.1249545]).appendArc([206.65,-122.8749545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.65,-56.975]).appendArc([206.15,-56.475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.15,-56.475]).appendArc([184.65,-55.975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.65,-55.375]).appendArc([181,-51.725],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([166.6224129,-51.725]).appendArc([166.1859776,-51.4689759],{"radius":0.5,"clockwise":true,"large":false}).appendArc([163,-49.6],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([148.6224129,-49.6]).appendArc([148.1859776,-49.3439759],{"radius":0.5,"clockwise":true,"large":false}).appendArc([145,-47.475],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([127,-47.475]).appendArc([123.8140224,-49.3439759],{"radius":3.65,"clockwise":false,"large":false}).appendArc([123.3775871,-49.6],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([109,-49.6]).appendArc([105.35,-53.25],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([105.35,-53.35]).appendArc([104.85,-53.85],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([91,-53.85]).appendArc([87.35,-57.5],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([87.35,-108.5]).appendArc([91,-112.15],{"radius":3.65,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91,-109.75],[126.0051746,-109.75]]).appendArc([126.4018293,-109.9455906],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([140.2533331,-127.9945198]).appendPoint([192.861738,-142.0908994]).appendPoint([204.25,-122.365851]).appendPoint([204.25,-58.875]).appendPoint([182.75,-58.875]).appendArc([182.25,-58.375],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([182.25,-55.375]).appendArc([181,-54.125],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([164.75,-54.125]).appendArc([164.25,-53.625],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([164.25,-53.25]).appendArc([163,-52],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([146.75,-52]).appendArc([146.25,-51.5],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.25,-51.125]).appendArc([145,-49.875],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([127,-49.875]).appendArc([125.75,-51.125],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([125.75,-51.5]).appendArc([125.25,-52],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([109,-52]).appendArc([107.75,-53.25],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([107.75,-55.75]).appendArc([107.25,-56.25],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([91,-56.25]).appendArc([89.75,-57.5],{"radius":1.25,"clockwise":false,"large":false}).appendPoint([89.75,-108.5]).appendArc([91,-109.75],{"radius":1.25,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[91,-112.15],[124.8217334,-112.15]]).appendArc([125.2183881,-112.3455906],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([138.7420098,-129.9672793]).appendArc([139.0092548,-130.1458328],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([193.648816,-144.7864592]).appendArc([194.2112382,-144.5534963],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.5830127,-123.1249545]).appendArc([206.65,-122.8749545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([206.65,-56.975]).appendArc([206.15,-56.475],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.15,-56.475]).appendArc([184.65,-55.975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.65,-55.375]).appendArc([181,-51.725],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([166.6224129,-51.725]).appendArc([166.1859776,-51.4689759],{"radius":0.5,"clockwise":true,"large":false}).appendArc([163,-49.6],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([148.6224129,-49.6]).appendArc([148.1859776,-49.3439759],{"radius":0.5,"clockwise":true,"large":false}).appendArc([145,-47.475],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([127,-47.475]).appendArc([123.8140224,-49.3439759],{"radius":3.65,"clockwise":false,"large":false}).appendArc([123.3775871,-49.6],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([109,-49.6]).appendArc([105.35,-53.25],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([105.35,-53.35]).appendArc([104.85,-53.85],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([91,-53.85]).appendArc([87.35,-57.5],{"radius":3.65,"clockwise":false,"large":false}).appendPoint([87.35,-108.5]).appendArc([91,-112.15],{"radius":3.65,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[181.1865886,-115.0130038],"radius":1.1})
.union(
    CAG.circle({"center":[141.4,-109.775],"radius":1.1})
).union(
    CAG.circle({"center":[163,-70.25],"radius":1.1})
).union(
    CAG.circle({"center":[109,-87.25],"radius":1.1})
).union(
    CAG.circle({"center":[109,-70.25],"radius":1.1})
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

        
import os, sys, textwrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

# -------------------------------------------------------------
# PATH CONFIGURATION
# -------------------------------------------------------------
MEDIA_DIR = r"C:\Users\cvior\.gemini\antigravity\brain\60871402-b404-4aaa-be0e-66fa41a7aff0\.user_uploaded"
ORIG_PHOTO = os.path.join(MEDIA_DIR, "media_1789737145072.jpg")
ORIG_LOGO = os.path.join(MEDIA_DIR, "media_1789737133948.png")
QR_CODE = "images/qr_pizzagondola.png"

OUTPUT_DIRS = [
    r"c:\xampp_lite_8_5\www\pizzagondola.ro\materiale-print",
    r"C:\Users\cvior\.gemini\antigravity\brain\60871402-b404-4aaa-be0e-66fa41a7aff0",
    r"C:\Users\cvior\.gemini\antigravity\brain\85fc650c-9db5-453f-9cde-b0315986ae34"
]

for d in OUTPUT_DIRS:
    os.makedirs(d, exist_ok=True)

# -------------------------------------------------------------
# 1. GENERATE FRONT FLYER (pliant_fata_patrat_300dpi.jpg)
# -------------------------------------------------------------
def generate_front_flyer():
    print("Generating FRONT FLYER (pliant_fata_patrat_300dpi.jpg)...")
    CW, CH = 2400, 2400
    canvas = Image.new('RGBA', (CW, CH), (14, 15, 17, 255))

    orig = Image.open(ORIG_PHOTO).convert('RGBA')
    logo = Image.open(ORIG_LOGO).convert('RGBA')
    qr = Image.open(QR_CODE).convert('RGBA')

    # Pizza photography section
    pizza_crop = orig.crop((0, 370, 854, 815))
    target_pizza_w = CW
    scale_factor = target_pizza_w / pizza_crop.width
    target_pizza_h = int(pizza_crop.height * scale_factor)
    pizza_scaled = pizza_crop.resize((target_pizza_w, target_pizza_h), Image.Resampling.LANCZOS)

    pizza_scaled = ImageEnhance.Sharpness(pizza_scaled).enhance(1.25)
    pizza_scaled = ImageEnhance.Color(pizza_scaled).enhance(1.05)

    pizza_y = 910
    canvas.paste(pizza_scaled, (0, pizza_y))

    # Top chalkboard background: from y=0 to y=920
    top_h = 920
    for y in range(top_h):
        val = int(12 + (y / top_h) * 5)
        line = Image.new('RGBA', (CW, 1), (val, val+1, val+3, 255))
        canvas.paste(line, (0, y))

    draw = ImageDraw.Draw(canvas)

    f_h1 = ImageFont.truetype('arialbd.ttf', 72)
    f_h2 = ImageFont.truetype('arialbd.ttf', 62)
    f_body = ImageFont.truetype('segoeui.ttf', 40)
    f_body_b = ImageFont.truetype('segoeuib.ttf', 40)
    f_pill = ImageFont.truetype('segoeuib.ttf', 38)
    f_sub_logo = ImageFont.truetype('segoeuib.ttf', 38)
    f_hours = ImageFont.truetype('segoeuib.ttf', 36)
    f_hours_sub = ImageFont.truetype('segoeui.ttf', 28)
    f_badge_t = ImageFont.truetype('arialbd.ttf', 36)
    f_badge_b = ImageFont.truetype('arialbd.ttf', 32)
    f_footer_lbl = ImageFont.truetype('segoeui.ttf', 32)
    f_footer_val = ImageFont.truetype('segoeuib.ttf', 44)
    f_footer_sub = ImageFont.truetype('segoeui.ttf', 26)

    y_header_start = 175

    # --- LEFT SIDE: WEBSITE LAUNCH & ONLINE ORDERING ---
    x_left = 110
    y_curr = y_header_start

    draw.text((x_left, y_curr), 'NOU! ACUM ȘI ONLINE', fill=(245, 185, 60, 255), font=f_h1)
    y_curr += 85
    draw.text((x_left, y_curr), 'COMANDĂ PE WEBSITE!', fill=(255, 255, 255, 255), font=f_h2)
    y_curr += 85

    # Divider line & Italian accent
    draw.line((x_left, y_curr, x_left + 900, y_curr), fill=(227, 130, 24, 255), width=5)
    draw.line((x_left, y_curr + 8, x_left + 100, y_curr + 8), fill=(0, 146, 70, 255), width=4)
    draw.line((x_left + 100, y_curr + 8, x_left + 200, y_curr + 8), fill=(255, 255, 255, 255), width=4)
    draw.line((x_left + 200, y_curr + 8, x_left + 300, y_curr + 8), fill=(206, 43, 55, 255), width=4)
    y_curr += 35

    draw.text((x_left, y_curr), 'Am lansat noul website ', fill=(240, 240, 240, 255), font=f_body)
    t_w1 = draw.textlength('Am lansat noul website ', font=f_body)
    draw.text((x_left + t_w1, y_curr), 'pizzagondola.ro!', fill=(245, 185, 60, 255), font=f_body_b)
    y_curr += 60

    draw.text((x_left, y_curr), 'Comanzi pizza ta favorită simplu și rapid,', fill=(230, 230, 230, 255), font=f_body)
    y_curr += 55
    draw.text((x_left, y_curr), 'direct de pe telefon sau laptop.', fill=(230, 230, 230, 255), font=f_body)
    y_curr += 75

    # Pill Badge: EXACT USER REQUIREMENT - "Plată cu cardul sau cash la livrare (nu online)"
    pill_pad_x = 35
    pill_text = 'Plată cu cardul (POS) sau cash la livrare'
    pill_w = draw.textlength(pill_text, font=f_pill) + 40
    pill_box = (x_left, y_curr, x_left + pill_w + pill_pad_x*2, y_curr + 68)
    draw.rounded_rectangle(pill_box, radius=20, fill=(35, 26, 20, 230), outline=(227, 130, 24, 255), width=3)
    chk_cx = x_left + pill_pad_x + 12
    chk_cy = y_curr + 34
    draw.ellipse((chk_cx - 16, chk_cy - 16, chk_cx + 16, chk_cy + 16), fill=(0, 146, 70, 255))
    draw.line((chk_cx - 8, chk_cy, chk_cx - 2, chk_cy + 6), fill=(255, 255, 255, 255), width=3)
    draw.line((chk_cx - 2, chk_cy + 6, chk_cx + 8, chk_cy - 6), fill=(255, 255, 255, 255), width=3)
    draw.text((chk_cx + 26, y_curr + 12), pill_text, fill=(255, 240, 210, 255), font=f_pill)
    y_curr += 90

    # CTA Text
    draw.text((x_left, y_curr), 'Scanează codul QR de mai jos și intră pe website.', fill=(245, 185, 60, 255), font=f_body_b)

    # --- RIGHT SIDE: OFFICIAL LOGO & ACCURATE SCHEDULE ---
    logo_w = 980
    logo_h = int(logo_w * (logo.height / logo.width))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    logo_x = 1320
    logo_y = y_header_start
    canvas.paste(logo_resized, (logo_x, logo_y), logo_resized)

    right_center_x = logo_x + logo_w // 2
    y_right = logo_y + logo_h + 25

    line_b1 = 'Pizza la Metru – Comandă online și savurează acasă!'
    w_b1 = draw.textlength(line_b1, font=f_sub_logo)
    draw.text((right_center_x - w_b1//2, y_right), line_b1, fill=(255, 245, 230, 255), font=f_sub_logo)
    y_right += 60

    # Updated Program: L-S: 09:00 - 20:00 | D: 10:00 - 20:00
    prog_text = 'Program de Lucru:'
    prog_hours = 'L–S: 09:00 – 20:00  |  D: 10:00 – 20:00'
    prog_full = f'{prog_text}  {prog_hours}'
    w_prog = draw.textlength(prog_full, font=f_hours)
    prog_box = (right_center_x - w_prog//2 - 25, y_right - 6, right_center_x + w_prog//2 + 25, y_right + 58)
    draw.rounded_rectangle(prog_box, radius=16, fill=(22, 20, 18, 210), outline=(245, 185, 60, 190), width=2)
    draw.text((right_center_x - w_prog//2, y_right), prog_text, fill=(245, 185, 60, 255), font=f_hours)
    w_lbl = draw.textlength(prog_text + '  ', font=f_hours)
    draw.text((right_center_x - w_prog//2 + w_lbl, y_right), prog_hours, fill=(255, 255, 255, 255), font=f_hours)

    y_right += 70
    sub_cutoff = 'Ultima comandă cu livrare se preia la ora 19:30'
    w_sc = draw.textlength(sub_cutoff, font=f_hours_sub)
    draw.text((right_center_x - w_sc//2, y_right), sub_cutoff, fill=(220, 215, 205, 230), font=f_hours_sub)

    # --- FOOTER BAR (y=2170 to 2400) ---
    footer_box = (0, 2170, CW, CH)
    draw.rectangle(footer_box, fill=(10, 10, 10, 255))
    draw.line((0, 2170, CW, 2170), fill=(227, 130, 24, 255), width=4)

    f_div_col = (45, 40, 38, 255)
    for div_x in [580, 1180, 1780]:
        draw.line((div_x, 2195, div_x, 2375), fill=f_div_col, width=2)

    def draw_icon_pin(d, cx, cy):
        d.ellipse((cx-22, cy-34, cx+22, cy+10), fill=(227, 130, 24, 255))
        d.polygon([(cx-22, cy-12), (cx+22, cy-12), (cx, cy+32)], fill=(227, 130, 24, 255))
        d.ellipse((cx-9, cy-20, cx+9, cy-2), fill=(10, 10, 10, 255))

    def draw_icon_phone(d, cx, cy):
        d.rounded_rectangle((cx-20, cy-32, cx+20, cy+32), radius=8, outline=(227, 130, 24, 255), width=4)
        d.ellipse((cx-4, cy+18, cx+4, cy+26), fill=(227, 130, 24, 255))
        d.line((cx-9, cy-24, cx+9, cy-24), fill=(227, 130, 24, 255), width=3)

    def draw_icon_globe(d, cx, cy):
        d.ellipse((cx-28, cy-28, cx+28, cy+28), outline=(227, 130, 24, 255), width=4)
        d.ellipse((cx-13, cy-28, cx+13, cy+28), outline=(227, 130, 24, 255), width=3)
        d.line((cx-28, cy, cx+28, cy), fill=(227, 130, 24, 255), width=3)
        d.line((cx-24, cy-13, cx+24, cy-13), fill=(227, 130, 24, 255), width=2)
        d.line((cx-24, cy+13, cx+24, cy+13), fill=(227, 130, 24, 255), width=2)

    def draw_icon_truck(d, cx, cy):
        d.rounded_rectangle((cx-28, cy-20, cx+10, cy+20), radius=4, fill=(227, 130, 24, 255))
        d.polygon([(cx+10, cy-6), (cx+28, cy-6), (cx+30, cy+20), (cx+10, cy+20)], fill=(227, 130, 24, 255))
        d.ellipse((cx-20, cy+14, cx-4, cy+28), fill=(10, 10, 10, 255), outline=(227, 130, 24, 255), width=3)
        d.ellipse((cx+10, cy+14, cx+26, cy+28), fill=(10, 10, 10, 255), outline=(227, 130, 24, 255), width=3)

    draw_icon_pin(draw, 75, 2285)
    draw.text((125, 2235), 'Locație:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((125, 2278), 'Decebal 35', fill=(255, 255, 255, 255), font=f_footer_val)

    draw_icon_phone(draw, 660, 2285)
    draw.text((710, 2235), 'Comenzi telefonice:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((710, 2278), '0747 216 161', fill=(255, 255, 255, 255), font=f_footer_val)

    draw_icon_globe(draw, 1260, 2285)
    draw.text((1310, 2235), 'Comenzi Online Direct:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((1310, 2278), 'pizzagondola.ro', fill=(245, 185, 60, 255), font=f_footer_val)

    draw_icon_truck(draw, 1850, 2285)
    draw.text((1905, 2225), 'Livrare:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((1905, 2265), 'Gratuită*', fill=(255, 255, 255, 255), font=f_footer_val)
    draw.text((1905, 2320), '*(condiție: 1 pizza oraș / 2 în jur)', fill=(245, 185, 60, 255), font=f_footer_sub)

    # --- QR BADGE ---
    b_radius = 255
    bc_cx = 430
    bc_cy = 1770

    badge = Image.new('RGBA', (b_radius*2 + 60, b_radius*2 + 60), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(badge)
    b_pad = 30
    bx = b_radius + b_pad
    by = b_radius + b_pad

    for s in range(25, 0, -2):
        alpha = int(48 * ((26-s)/25.0)**1.5)
        b_draw.ellipse((bx - b_radius - s, by - b_radius - s + 8, bx + b_radius + s, by + b_radius + s + 8), fill=(0, 0, 0, alpha))

    b_draw.ellipse((bx - b_radius, by - b_radius, bx + b_radius, by + b_radius), fill=(14, 13, 12, 255))
    b_draw.ellipse((bx - b_radius + 8, by - b_radius + 8, bx + b_radius - 8, by + b_radius - 8), outline=(227, 130, 24, 255), width=7)
    b_draw.ellipse((bx - b_radius + 18, by - b_radius + 18, bx + b_radius - 18, by + b_radius - 18), outline=(245, 185, 60, 200), width=3)

    b_title = 'SCANEAZĂ & COMANDĂ'
    w_bt = b_draw.textlength(b_title, font=f_badge_t)
    b_draw.text((bx - w_bt//2, by - b_radius + 38), b_title, fill=(255, 240, 190, 255), font=f_badge_t)

    qr_target_size = 270
    qr_res = qr.resize((qr_target_size, qr_target_size), Image.Resampling.LANCZOS)
    plate_pad = 14
    plate_size = qr_target_size + plate_pad * 2
    qr_plate = Image.new('RGBA', (plate_size, plate_size), (255, 255, 255, 255))
    qr_plate.paste(qr_res, (plate_pad, plate_pad))

    plate_mask = Image.new('L', (plate_size, plate_size), 0)
    pm_draw = ImageDraw.Draw(plate_mask)
    pm_draw.rounded_rectangle((0, 0, plate_size, plate_size), radius=22, fill=255)

    plate_x = bx - plate_size // 2
    plate_y = by - plate_size // 2 + 10
    badge.paste(qr_plate, (plate_x, plate_y), mask=plate_mask)

    b_sub = 'pizzagondola.ro'
    w_bs = b_draw.textlength(b_sub, font=f_badge_b)
    b_draw.text((bx - w_bs//2, plate_y + plate_size + 14), b_sub, fill=(245, 185, 60, 255), font=f_badge_b)

    canvas.paste(badge, (bc_cx - bx, bc_cy - by), badge)

    # Save to all target paths
    final_rgb = canvas.convert('RGB')
    for d in OUTPUT_DIRS:
        target = os.path.join(d, "pliant_fata_patrat_300dpi.jpg")
        final_rgb.save(target, quality=97, dpi=(300, 300))
        print(f"  -> Saved front flyer to: {target}")


# -------------------------------------------------------------
# 2. GENERATE BACK FLYER (pliant_verso_meniu_300dpi.jpg)
# -------------------------------------------------------------
def generate_back_flyer():
    print("\nGenerating BACK MENU FLYER (pliant_verso_meniu_300dpi.jpg)...")
    CW, CH = 2400, 2400
    canvas = Image.new('RGBA', (CW, CH), (14, 15, 17, 255))
    logo = Image.open(ORIG_LOGO).convert('RGBA')

    for y in range(CH):
        val = int(12 + (y / CH) * 6)
        line = Image.new('RGBA', (CW, 1), (val, val+1, val+3, 255))
        canvas.paste(line, (0, y))

    draw = ImageDraw.Draw(canvas)

    margin = 40
    draw.rectangle((margin, margin, CW - margin, CH - margin), outline=(55, 48, 42, 255), width=2)
    draw.rectangle((margin + 8, margin + 8, CW - margin - 8, CH - margin - 8), outline=(227, 130, 24, 180), width=4)
    draw.rectangle((margin + 16, margin + 16, CW - margin - 16, CH - margin - 16), outline=(245, 185, 60, 100), width=1)

    corner_size = 45
    def draw_corner(cx, cy, flip_x, flip_y):
        dx = corner_size if flip_x else -corner_size
        dy = corner_size if flip_y else -corner_size
        draw.line((cx, cy, cx + dx, cy), fill=(245, 185, 60, 255), width=3)
        draw.line((cx, cy, cx, cy + dy), fill=(245, 185, 60, 255), width=3)
        draw.ellipse((cx-5, cy-5, cx+5, cy+5), fill=(227, 130, 24, 255))

    draw_corner(margin + 22, margin + 22, True, True)
    draw_corner(CW - margin - 22, margin + 22, False, True)
    draw_corner(margin + 22, CH - margin - 22, True, False)
    draw_corner(CW - margin - 22, CH - margin - 22, False, False)

    # --- 1. HEADER SECTION ---
    logo_w = 620
    logo_h = int(logo_w * (logo.height / logo.width))
    logo_res = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    canvas.paste(logo_res, ((CW - logo_w) // 2, 50), logo_res)

    f_price_h = ImageFont.truetype('arialbd.ttf', 44)
    f_price_sub = ImageFont.truetype('segoeuib.ttf', 30)

    f_pname = ImageFont.truetype('arialbd.ttf', 40)
    f_pnum = ImageFont.truetype('arialbd.ttf', 26)
    f_pingr = ImageFont.truetype('segoeui.ttf', 29)

    f_sec_title = ImageFont.truetype('arialbd.ttf', 32)
    f_card_h = ImageFont.truetype('arialbd.ttf', 30)
    f_card_body = ImageFont.truetype('segoeui.ttf', 24)
    f_card_bold = ImageFont.truetype('segoeuib.ttf', 26)
    f_footer_lbl = ImageFont.truetype('segoeui.ttf', 30)
    f_footer_val = ImageFont.truetype('segoeuib.ttf', 40)

    # Price Banner (Updated to 5,70 LEI / 100g and ≈ 68 LEI / Pizza Întreagă)
    banner_y = 50 + logo_h + 14
    banner_w = 1700
    banner_h = 100
    bx1 = (CW - banner_w) // 2
    bx2 = bx1 + banner_w
    draw.rounded_rectangle((bx1, banner_y, bx2, banner_y + banner_h), radius=20, fill=(28, 22, 18, 230), outline=(227, 130, 24, 255), width=3)

    p_text = 'PREȚ UNIC: 5,70 LEI / 100g'
    p_sub = '≈ 68 LEI / Pizza Întreagă (aprox. 1.200g – 1.450g) • Tăiată proaspătă din cuptor la gramajul dorit'
    w_pt = draw.textlength(p_text, font=f_price_h)
    w_ps = draw.textlength(p_sub, font=f_price_sub)
    draw.text(((CW - w_pt) // 2, banner_y + 12), p_text, fill=(245, 185, 60, 255), font=f_price_h)
    draw.text(((CW - w_ps) // 2, banner_y + 58), p_sub, fill=(240, 240, 240, 255), font=f_price_sub)

    div_y = banner_y + banner_h + 16
    draw.line((100, div_y, CW - 100, div_y), fill=(55, 48, 42, 255), width=2)
    draw.line((CW//2 - 90, div_y, CW//2 - 30, div_y), fill=(0, 146, 70, 255), width=4)
    draw.line((CW//2 - 30, div_y, CW//2 + 30, div_y), fill=(255, 255, 255, 255), width=4)
    draw.line((CW//2 + 30, div_y, CW//2 + 90, div_y), fill=(206, 43, 55, 255), width=4)

    # --- 2. THE 12 PIZZAS (Updated 4 Formaggi to cașcaval afumat) ---
    pizzas = [
        (1, 'Pizza de post', 'Sos de roșii, ardei, dovlecel, ciuperci, porumb, roșii și măsline.'),
        (2, 'Pizza de post cu ton', 'Sos de roșii, roșii proaspete, porumb, ton și măsline.'),
        (3, 'Pizza Margherita cu șuncă', 'Sos de roșii, mozzarella fior di latte și șuncă Praga.'),
        (4, 'Pizza Diavola', 'Sos de roșii, mozzarella și salam Chorizo picant.'),
        (5, 'Pizza Capricciosa', 'Sos de roșii, mozzarella, ciuperci, șuncă, salam și măsline.'),
        (6, 'Pizza 4 Formaggi', 'Mozzarella, gorgonzola, cașcaval afumat și parmezan.'),
        (7, 'Pizza cu ton', 'Sos de roșii, mozzarella, roșii proaspete și ton.'),
        (8, 'Pizza Gondola', 'Sos de roșii, mozzarella, salam de vară, șuncă Praga, ardei, roșii și măsline.'),
        (9, 'Pizza ripiena cu șuncă', 'Blat dublu copt pe vatră, umplut generos cu mozzarella și șuncă.'),
        (10, 'Pizza Regina', 'Sos de roșii, mozzarella, ceafă afumată, roșii, porumb și măsline.'),
        (11, 'Pizza cu cabanos', 'Sos de roșii, mozzarella, cârnați cabanos, porumb, ardei și măsline.'),
        (12, 'Pizza cu piept de pui', 'Sos de roșii, mozzarella, roșii, ardei și piept de pui la grătar.')
    ]

    menu_top = div_y + 16
    slot_h = 180
    col1_x = 90
    col2_x = 1250
    col_w = 1060

    mid_x = CW // 2
    draw.line((mid_x, menu_top + 5, mid_x, menu_top + 6 * slot_h - 10), fill=(45, 40, 36, 255), width=2)

    for i, (pid, name, ingr) in enumerate(pizzas):
        col = 0 if i < 6 else 1
        row = i if i < 6 else i - 6
        x = col1_x if col == 0 else col2_x
        y = menu_top + row * slot_h

        # Number badge
        num_cx = x + 25
        num_cy = y + 26
        draw.ellipse((num_cx - 22, num_cy - 22, num_cx + 22, num_cy + 22), fill=(227, 130, 24, 255))
        num_str = str(pid)
        w_ns = draw.textlength(num_str, font=f_pnum)
        draw.text((num_cx - w_ns//2, num_cy - 15), num_str, fill=(10, 10, 10, 255), font=f_pnum)

        # Pizza Name
        name_x = x + 62
        draw.text((name_x, y + 5), name, fill=(255, 255, 255, 255), font=f_pname)

        # Ingredients (wrapped cleanly)
        ingr_y = y + 55
        wrapped_lines = textwrap.wrap(ingr, width=56)
        for l_idx, line in enumerate(wrapped_lines):
            draw.text((name_x, ingr_y + l_idx * 37), line, fill=(215, 210, 200, 255), font=f_pingr)

        if row < 5:
            draw.line((x + 10, y + slot_h - 6, x + col_w - 10, y + slot_h - 6), fill=(38, 34, 30, 255), width=1)

    # --- 3. DEDICATED SECTION: SOSURI, BĂUTURI & AMBALAJ ---
    extra_y = menu_top + 6 * slot_h + 16
    extra_h = 195
    draw.rounded_rectangle((70, extra_y, CW - 70, extra_y + extra_h), radius=18, fill=(22, 19, 17, 240), outline=(227, 130, 24, 230), width=2)

    extra_title = 'SOSURI ARTIZANALE • BĂUTURI RĂCORITOARE & BERE • AMBALAJ'
    w_ext = draw.textlength(extra_title, font=f_sec_title)
    draw.text(((CW - w_ext) // 2, extra_y + 14), extra_title, fill=(245, 185, 60, 255), font=f_sec_title)
    draw.line(((CW - w_ext) // 2, extra_y + 50, (CW + w_ext) // 2, extra_y + 50), fill=(227, 130, 24, 180), width=2)

    # 3 columns inside extra box:
    # Col 1: Sosuri (x=100)
    # Col 2: Bauturi (x=850)
    # Col 3: Ambalaj & Detalii (x=1650)
    draw.line((820, extra_y + 58, 820, extra_y + extra_h - 18), fill=(55, 48, 42, 255), width=1)
    draw.line((1620, extra_y + 58, 1620, extra_y + extra_h - 18), fill=(55, 48, 42, 255), width=1)

    # Col 1: Sosuri
    draw.text((100, extra_y + 64), '• Sos de roșii dulce (50g):', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((440, extra_y + 64), '2,00 LEI', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((100, extra_y + 104), '• Sos de roșii picant (50g):', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((440, extra_y + 104), '2,00 LEI', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((100, extra_y + 144), '• Sos maioneză cu usturoi (50g):', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((505, extra_y + 144), '1,00 LEU', fill=(245, 185, 60, 255), font=f_card_bold)

    # Col 2: Bauturi
    draw.text((850, extra_y + 64), '• Apă plată / minerală (0.5L):', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((1290, extra_y + 64), '5,50 LEI', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((850, extra_y + 104), '• Sucuri (Pepsi, Mirinda, 7UP, Lipton) 0.5L:', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((1480, extra_y + 104), '8,50 LEI*', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((850, extra_y + 144), '• Bere (Ciuc, Birra Moretti, Heineken) 0.5L:', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((1480, extra_y + 144), '8,50 LEI*', fill=(245, 185, 60, 255), font=f_card_bold)

    # Col 3: Ambalaj & Notă SGR
    draw.text((1650, extra_y + 64), '• Ambalaj cutie pizza:', fill=(255, 230, 190, 255), font=f_card_bold)
    draw.text((2010, extra_y + 64), '2,00 LEI / buc.', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((1650, extra_y + 104), '*Prețul băuturilor include garanția SGR (0,50 LEI).', fill=(200, 195, 185, 255), font=f_card_body)
    draw.text((1650, extra_y + 144), 'Pizza se livrează caldă, proaspătă din cuptor!', fill=(0, 200, 100, 255), font=f_card_bold)

    # --- 4. DELIVERY ZONES & COSTS SECTION ---
    deliv_y = extra_y + extra_h + 18
    deliv_h = 390
    draw.rounded_rectangle((70, deliv_y, CW - 70, deliv_y + deliv_h), radius=20, fill=(20, 18, 16, 240), outline=(227, 130, 24, 255), width=3)

    deliv_title = 'CONDIȚII & ZONE DE LIVRARE (CONFORM WEBSITE PIZZAGONDOLA.RO)'
    w_dt = draw.textlength(deliv_title, font=f_sec_title)
    draw.text(((CW - w_dt) // 2, deliv_y + 16), deliv_title, fill=(245, 185, 60, 255), font=f_sec_title)
    draw.line(((CW - w_dt) // 2, deliv_y + 54, (CW + w_dt) // 2, deliv_y + 54), fill=(227, 130, 24, 200), width=2)

    d_col1_x = 105
    d_col2_x = 1240
    d_mid = CW // 2
    draw.line((d_mid, deliv_y + 70, d_mid, deliv_y + deliv_h - 18), fill=(55, 48, 42, 255), width=2)

    def draw_check_circle(d, cx, cy):
        d.ellipse((cx-14, cy-14, cx+14, cy+14), fill=(0, 146, 70, 255))
        d.line((cx-7, cy, cx-1, cy+6), fill=(255, 255, 255, 255), width=3)
        d.line((cx-1, cy+6, cx+7, cy-5), fill=(255, 255, 255, 255), width=3)

    # Column 1: Piatra Neamț (Condiționată de min. 1 pizza întreagă ~68 LEI - FĂRĂ TAXĂ TRANSPORT)
    draw.text((d_col1_x, deliv_y + 76), 'MUNICIPIUL PIATRA NEAMȚ', fill=(255, 255, 255, 255), font=f_card_h)
    draw_check_circle(draw, d_col1_x + 14, deliv_y + 138)
    draw.text((d_col1_x + 40, deliv_y + 124), 'LIVRARE FĂRĂ TAXĂ:', fill=(0, 200, 100, 255), font=f_card_bold)
    draw.text((d_col1_x + 350, deliv_y + 124), 'condiționată de min. 1 pizza întreagă', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((d_col1_x + 40, deliv_y + 165), '(comenzi de minimum aprox. 68 LEI / pizza de ~1.200g)', fill=(210, 205, 195, 255), font=f_card_body)
    draw.text((d_col1_x, deliv_y + 215), '• Nu percepem taxă de transport!', fill=(255, 220, 180, 255), font=f_card_bold)
    draw.text((d_col1_x + 20, deliv_y + 252), 'Livrarea în oraș se efectuează exclusiv de la 1 pizza întreagă.', fill=(200, 195, 185, 255), font=f_card_body)
    draw.text((d_col1_x + 20, deliv_y + 284), 'Pentru porții mai mici (felii 300g): Ridicare personală din pizzerie.', fill=(200, 195, 185, 255), font=f_card_body)
    draw.text((d_col1_x, deliv_y + 332), '• Timp mediu livrare: 30 – 50 min. • Plată card (POS) sau cash la livrare', fill=(245, 185, 60, 255), font=f_card_bold)

    # Column 2: Zone Limitrofe (Condiționată de min. 2 pizza întregi ~137 LEI - FĂRĂ TAXĂ TRANSPORT)
    draw.text((d_col2_x, deliv_y + 76), 'ZONE LIMITROFE (COMUNE & ÎMPREJURIMI)', fill=(255, 255, 255, 255), font=f_card_h)
    draw_check_circle(draw, d_col2_x + 14, deliv_y + 138)
    draw.text((d_col2_x + 40, deliv_y + 124), 'LIVRARE FĂRĂ TAXĂ:', fill=(0, 200, 100, 255), font=f_card_bold)
    draw.text((d_col2_x + 350, deliv_y + 124), 'condiționată de min. 2 pizza întregi', fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((d_col2_x + 40, deliv_y + 165), '(comenzi de minimum aprox. 137 LEI)', fill=(210, 205, 195, 255), font=f_card_body)
    draw.text((d_col2_x, deliv_y + 205), '• Localități deservite cu livrare la domiciliu:', fill=(255, 220, 180, 255), font=f_card_bold)
    localities_l1 = 'Dumbrava Roșie • Văleni • Săvinești (Pasarelă) • Bisericani'
    localities_l2 = 'Gârcina (Școală) • Girov (Kober) • Bistrița • Alexandru cel Bun • Speranța'
    draw.text((d_col2_x + 20, deliv_y + 240), localities_l1, fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((d_col2_x + 20, deliv_y + 274), localities_l2, fill=(245, 185, 60, 255), font=f_card_bold)
    draw.text((d_col2_x, deliv_y + 318), '• Livrare condiționată de 2 pizza (nu se livrează sub 2 pizza).', fill=(200, 195, 185, 255), font=f_card_body)

    # --- 5. FOOTER BAR (Updated schedule: L-S: 09:00 - 20:00 | D: 10:00 - 20:00 | Ultima comandă: 19:30) ---
    foot_y = deliv_y + deliv_h + 20
    draw.rectangle((margin + 20, foot_y, CW - margin - 20, CH - margin - 20), fill=(10, 10, 10, 255))
    draw.line((margin + 20, foot_y, CW - margin - 20, foot_y), fill=(227, 130, 24, 255), width=3)

    f_col_w = (CW - 2*(margin + 20)) // 4

    def draw_icon_pin(d, cx, cy):
        d.ellipse((cx-20, cy-30, cx+20, cy+8), fill=(227, 130, 24, 255))
        d.polygon([(cx-20, cy-10), (cx+20, cy-10), (cx, cy+28)], fill=(227, 130, 24, 255))
        d.ellipse((cx-8, cy-18, cx+8, cy-2), fill=(10, 10, 10, 255))

    def draw_icon_phone(d, cx, cy):
        d.rounded_rectangle((cx-18, cy-28, cx+18, cy+28), radius=7, outline=(227, 130, 24, 255), width=3)
        d.ellipse((cx-4, cy+15, cx+4, cy+23), fill=(227, 130, 24, 255))
        d.line((cx-8, cy-20, cx+8, cy-20), fill=(227, 130, 24, 255), width=2)

    def draw_icon_globe(d, cx, cy):
        d.ellipse((cx-25, cy-25, cx+25, cy+25), outline=(227, 130, 24, 255), width=3)
        d.ellipse((cx-12, cy-25, cx+12, cy+25), outline=(227, 130, 24, 255), width=2)
        d.line((cx-25, cy, cx+25, cy), fill=(227, 130, 24, 255), width=2)
        d.line((cx-21, cy-11, cx+21, cy-11), fill=(227, 130, 24, 255), width=1)
        d.line((cx-21, cy+11, cx+21, cy+11), fill=(227, 130, 24, 255), width=1)

    def draw_icon_clock(d, cx, cy):
        d.ellipse((cx-25, cy-25, cx+25, cy+25), outline=(227, 130, 24, 255), width=3)
        d.line((cx, cy-15, cx, cy), fill=(227, 130, 24, 255), width=2)
        d.line((cx, cy, cx+12, cy), fill=(227, 130, 24, 255), width=2)

    x1 = margin + 40
    draw_icon_pin(draw, x1 + 25, foot_y + 70)
    draw.text((x1 + 65, foot_y + 32), 'Locație:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((x1 + 65, foot_y + 75), 'Decebal 35', fill=(255, 255, 255, 255), font=f_footer_val)

    x2 = x1 + f_col_w
    draw.line((x2 - 15, foot_y + 20, x2 - 15, foot_y + 135), fill=(45, 40, 38, 255), width=1)
    draw_icon_phone(draw, x2 + 25, foot_y + 70)
    draw.text((x2 + 65, foot_y + 32), 'Comenzi telefonice:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((x2 + 65, foot_y + 75), '0747 216 161', fill=(255, 255, 255, 255), font=f_footer_val)

    x3 = x2 + f_col_w
    draw.line((x3 - 15, foot_y + 20, x3 - 15, foot_y + 135), fill=(45, 40, 38, 255), width=1)
    draw_icon_globe(draw, x3 + 25, foot_y + 70)
    draw.text((x3 + 65, foot_y + 32), 'Comenzi Online Direct:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((x3 + 65, foot_y + 75), 'pizzagondola.ro', fill=(245, 185, 60, 255), font=f_footer_val)

    x4 = x3 + f_col_w
    draw.line((x4 - 15, foot_y + 20, x4 - 15, foot_y + 135), fill=(45, 40, 38, 255), width=1)
    draw_icon_clock(draw, x4 + 25, foot_y + 70)
    draw.text((x4 + 65, foot_y + 22), 'Program de Lucru:', fill=(170, 170, 170, 255), font=f_footer_lbl)
    draw.text((x4 + 65, foot_y + 58), 'L–S: 09:00 – 20:00 | D: 10:00 – 20:00', fill=(255, 255, 255, 255), font=ImageFont.truetype('segoeuib.ttf', 26))
    draw.text((x4 + 65, foot_y + 96), 'Ultima comandă cu livrare: 19:30', fill=(245, 185, 60, 255), font=ImageFont.truetype('segoeuib.ttf', 24))

    # Save to all target paths
    final_rgb = canvas.convert('RGB')
    for d in OUTPUT_DIRS:
        target = os.path.join(d, "pliant_verso_meniu_300dpi.jpg")
        final_rgb.save(target, quality=97, dpi=(300, 300))
        print(f"  -> Saved back flyer to: {target}")

if __name__ == "__main__":
    generate_front_flyer()
    generate_back_flyer()
    print("\nALL FLYERS GENERATED AT 300 DPI SUCCESSFULLY!")

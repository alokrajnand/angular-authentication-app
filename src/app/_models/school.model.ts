/*************************************
 * School Module
 ***********************************8*/

export class SchoolModel {
  school_header: String;
  school_Name: String;
  school_country: String;
  school_state: String;
  school_city: String;
  school_location: String;
  school_pincode: Number;
  school_address: String;
  school_longitude: String;
  school_latitude: String;
  school_map_share_link: String;
  school_type: String;
  school_board: String;
  school_medium: String;
  school_owned_by: String;
  school_phone_number: String;
  school_website_url: String;
  school_mailing_address: String;
  school_about: String;
  school_admission_process: String;
  school_start_date: Date;
  created_dt: Date;
  updated_dt: Date;
}

/*************************************
 * School fee Module
 ***********************************8*/

export class SchoolFeeModel {
  school_header: String;
  grade: String;
  grade_desc: String;
  grade_fee: Number;
  created_dt: Date;
  updated_dt: Date;
}

/*************************************
 * School gallery Module
 ***********************************8*/

export class SchoolFacilityModel {
  school_header: String;
  school_Library: String;
  school_playground: String;
  school_science_Lab: String;
  school_Computer_Lab: String;
  school_auditorium: String;
  school_music_club: String;
  school_drama_club: String;
  school_Swimming_pool: String;
  school_transport_facilities: String;
  school_smart_classroom: String;
  school_Number_of_teachers: String;
  school_number_of_class_room: String;
  school_student_per_classroom: String;
  school_disabled_friendly: String;
  school_hostel: String;
  created_dt: Date;
  updated_dt: Date;
}

/*************************************
 * School gallery Module
 ***********************************8*/

export class SchoolGalleryModel {
  school_header: String;
  school_main_image_url: String;
  school_thumbnail_image_url: String;
  school_image_alt: String;
  school_image_desc: String;
  small: String;
  medium: String;
  big: String;
  created_dt: Date;
  updated_dt: Date;
}

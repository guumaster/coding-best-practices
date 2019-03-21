function do_stuff() {
  // ...
  if (is_writable(folder)) {
    if (fp = fopen(file_path,'w')) {
      if (stuff = get_some_stuff()) {
        // FUNCTION BODY HERE 
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}

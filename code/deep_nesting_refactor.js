function do_stuff() {
  // ...
  if (!is_writable(folder)) {
    return false
  }
  fp = fopen(file_path,'w')
  if (!fp) {
    return false
  }
  if (stuff != get_some_stuff()) {
    return false
  }
  
  // FUNCTION BODY HERE 
}

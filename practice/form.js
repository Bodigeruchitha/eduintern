function validateFname()
{
  let fname = document.getElementById("fname").value;
  let fout = document.getElementById("fout");
  let fdiv = document.getElementById("fdiv");
  if(fname.trim().length==0)
  {
    fout.innerText="Please Enter Firstname";
    fdiv.classList.add("has-error")
  }else{
    fout.innerText="";
    fdiv.classList.add("has-success")
    fdiv.classList.remove("has-error")
  }
}
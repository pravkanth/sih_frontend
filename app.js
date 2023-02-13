const attendanceTableBody = document.getElementById('attendance-table-body')
const attendanceTable = document.getElementById('attendance-table')
const showWorkerListBtn = document.getElementById('show-worklist-button')
const attendanceUploadImage = document.getElementById('upload-attendance-image')
const presentTableBody = document.getElementById('present-table-body')
const presentSpan = document.getElementById('present')
const uploadDataBtn = document.getElementById('upload-data-btn')
const attendanceDataEntry = document.getElementById('attendance-data-entry')
const uploadDataBox = document.getElementById('upload-data-box')
const dataEntryBtn= document.getElementById('data-entry-btn')


let date = new Date()
let currSystemDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

let presentCount = 0;

const totalWorkersList = {
    0 : {
        name:"Sam",workerId:"22312322",isPresent:false
    },
    1 : {
        name:"Ram",workerId:"312328982",isPresent:false
    },
    2:{
        name:"Sita",workerId:"328748733",isPresent:false,
    },
    3:{
        name:"Kamal",workerId:"9549888",isPresent:false,
    },
    4:{
        name:"Hari",workerId:"77447322",isPresent:false,
    },
    5:{
        name:"Mano ",workerId:"77447322",isPresent:false,
    },
    6 : {
        name:"Rahul",workerId:"22312322",isPresent:false
    },
    7 : {
        name:"Karan",workerId:"312328982",isPresent:false
    },
    8:{
        name:"Mohith",workerId:"328748733",isPresent:false,
    },
    9:{
        name:"Shain",workerId:"9549888",isPresent:false,
    },
    10:{
        name:"Locus",workerId:"77447322",isPresent:false,
    },
    11:{
        name:"Aravind ",workerId:"77447322",isPresent:false,
    },
}


showWorkerListBtn.addEventListener('click',()=>{
    if(attendanceTable.classList.contains("show")){
        attendanceTable.classList.remove("show")
        attendanceTable.style.display='none';
        attendanceUploadImage.style.display='none';
    }else{
        attendanceTable.classList.add("show")
        attendanceTable.style.display='';
        attendanceUploadImage.style.display='';
    }
})

uploadDataBtn.addEventListener('click',()=>{
    attendanceDataEntry.style.display = 'none';
    uploadDataBox.style.display = '';
})

dataEntryBtn.addEventListener('click',()=>{
    attendanceDataEntry.style.display = '';
    uploadDataBox.style.display = 'none';
})
for(let i=0;i<Object.keys(totalWorkersList).length;i++){
    let row = document.createElement('tr')

    let sno = document.createElement('td')
    let workerName = document.createElement('td')
    let workerID = document.createElement('td')
    let currDate = document.createElement('td')
    let attendance = document.createElement('td')
    let inputBox = document.createElement('input')

    sno.textContent = i+1;
    workerName.textContent = totalWorkersList[i].name;
    workerID.textContent = totalWorkersList[i].workerId;
    currDate.textContent = currSystemDate;
    inputBox.type = 'checkbox'
    inputBox.id = i

    row.appendChild(sno)
    row.appendChild(workerName)
    row.appendChild(workerID)
    row.appendChild(currDate)

    attendance.appendChild(inputBox)
    row.appendChild(attendance)
    attendanceTableBody.appendChild(row)
}

let dummy = document.getElementsByTagName('input');
for(let i=0;i<dummy.length;i++){
    if(dummy[i].type == "checkbox"){
        dummy[i].addEventListener('click',()=>{
            if(totalWorkersList[dummy[i].id].isPresent == true){
                totalWorkersList[dummy[i].id].isPresent = false
            }else{
                totalWorkersList[dummy[i].id].isPresent = true
            }
        })
    }
}


uploadDataBtn.addEventListener('click',()=>{
    presentCount = 0
    presentTableBody.innerHTML = ''
    attendanceTable.style.display='none';
    attendanceUploadImage.style.display = 'none';
    attendanceTable.classList.remove("show")
    let workerCodeNumber = document.getElementById('work-code').value;
    console.log(workerCodeNumber);

    for(let i=0;i<Object.keys(totalWorkersList).length;i++){
        if(totalWorkersList[i].isPresent == true){
            let row = document.createElement('tr')
            let sno = document.createElement('td')
            let workerName = document.createElement('td')
            let workerID = document.createElement('td')
            let workCode = document.createElement('td')
            let location = document.createElement('td')

            sno.textContent = presentCount+1
            workerName.textContent = totalWorkersList[i].name;
            workerID.textContent = totalWorkersList[i].workerId;
            workCode.textContent = workerCodeNumber;
            location.textContent = "chennai";

            row.appendChild(sno)
            row.appendChild(workerName)
            row.appendChild(workerID)
            row.appendChild(workCode)
            row.appendChild(location)

            presentTableBody.appendChild(row)
            presentCount+=1;
        }
    }
    presentSpan.textContent = presentCount;
})


//               Live Location         //



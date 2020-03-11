namespace hospital{

    let p = new Paciente();
        p.setNome("David");
        p.setCpf("001.001.001-01");
        p.setCodPaciente(1);
    
    let p1 = new Paciente();
        p1.setNome("Zika");
        p1.setCpf("002.002.002-02");
        p1.setCodPaciente(2);

    let p2 = new Paciente();
        p2.setNome("Ronaldinho");
        p2.setCpf("003.003.003-03");
        p2.setCodPaciente(3);

    let e = new Enfermeiro();
        e.setNome("Pica Pau");
        e.setCpf("111.111.111-11");
        e.setCodFuncionario(1);
        e.setcoren(11);
    
    let e1 = new Enfermeiro();
        e1.setNome("Taz");
        e1.setCpf("222.222.222-22");
        e1.setCodFuncionario(3);
        e1.setcoren(12);

    let e2 = new Enfermeiro();
        e2.setNome("Pernalonga");
        e2.setCpf("333.333.333-33");
        e2.setCodFuncionario(3);
        e2.setcoren(13);
    
    let m = new Medico();
        m.setNome("Zeka Urubu");
        m.setespecialidade ("Operações");
        m.setCrm(123);
        m.setCpf("123.123.123-11");
        m.setCodFuncionario(21);

    let m1 = new Medico();
        m1.setNome("Pernalonga");
        m1.setespecialidade ("Ortopedista");
        m1.setCrm(456);
        m1.setCpf("123.123.123-12");
        m1.setCodFuncionario(22);
    
    let m2 = new Medico();
        m2.setNome("Pateta");
        m2.setespecialidade ("Pediatra");
        m2.setCrm(789);
        m2.setCpf("123.123.123-13");
        m2.setCodFuncionario(23);

    let h = new Hospital ();
        h.setnome ("Hospital Daora")
        h.addEnfermeiros(e);
        h.addEnfermeiros(e1);
        h.addEnfermeiros(e2);
        h.addMedicos(m);
        h.addMedicos(m1);
        h.addMedicos(m2);
        h.addPacientes(p);
        h.addPacientes(p1);
        h.addPacientes(p2);

        document.getElementById("hospital").textContent=h.getnome();

        let tbMedico = document.getElementById("tbMedico");

        h.getmedicos().forEach(h=>{
            let nome = h.getNome();
            let cpf = h.getCpf();
            let crm = h.getCrm();
            let especialidade = h.getEspecialidade();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+crm+"</td><td>"+especialidade+"</td></tr>";
            tbMedico.innerHTML += html;
        })
        let tbEnfermeiras = document.getElementById("tbEnfermeiras");
        h.getEnfermeiros().forEach(h=>{
            let nome = h.getNome();
            let cpf = h.getCpf();
            let corem = h.getcoren();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+corem+"</td></tr>";
            tbEnfermeiras.innerHTML += html;
        })
        let tbPacientes = document.getElementById("tbPacientes");
        h.getpacientes().forEach(h=>{
            let nome = h.getNome();
            let cpf = h.getCpf();
            let cod = h.getCodPaciente();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+cod+"</td></tr>";
            tbPacientes.innerHTML += html;
        })

}
<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class User extends Migration
{
    public function up()
    {
        $this->forge->addField([
            //  DADOS GERAIS.  //
            'USR_ID' => [
                'type'              => 'INT',
                'unsigned'          => true,
                'auto_increment'    => true
            ],
            'USR_NAME' => [
                'type'          => 'VARCHAR',
                'constraint'    => '100',
                'null'          => false
            ],
            'USR_EMAIL' => [
                'type'          => 'VARCHAR',
                'constraint'    => '150',
                'null'          => false,
                'unique'        => true,
            ],
            'USR_PASSWORD' => [
                'type'          => 'VARCHAR',
                'constraint'    => '255',
                'null'          => false
            ],
            'USR_CPF' => [
                'type'          => 'VARCHAR',
                'constraint'    => '14',
                'null'          => false,
                'unique'        => true
            ],
            'USR_GENDER' => [
                'type'          => 'ENUM',
                'constraint'    => ['M', 'F'],
                'null'          => true
            ],
            //  /DADOS GERAIS.  //

            //  DADOS DE ENDEREÇO.   //
            'USR_ADDRESS_CEP' => [
                'type'          => 'VARCHAR',
                'constraint'    => '9',
                'null'          => true
            ],
            'USR_ADDRESS_NUMBER' => [
                'type'          => 'VARCHAR',
                'constraint'    => '10',
                'null'          => true
            ],
            'USR_ADDRESS_COMPLEMENT' => [
                'type'          => 'VARCHAR',
                'constraint'    => '150',
                'null'          => true
            ],
            'USR_ADDRESS_STREET' => [
                'type'          => 'VARCHAR',
                'constraint'    => '150',
                'null'          => true
            ],
            'USR_ADDRESS_NEIGHBORHOOD' => [
                'type'          => 'VARCHAR',
                'constraint'    => '150',
                'null'          => true
            ],
            'USR_ADDRESS_CITY' => [
                'type'          => 'VARCHAR',
                'constraint'    => '150',
                'null'          => true
            ],
            'USR_ADDRESS_STATE' => [
                'type'          => 'VARCHAR',
                'constraint'    => '2',
                'null'          => true
            ],
            //  /DADOS DE ENDEREÇO.   //

            'created_at' => [
                'type'          => 'TIMESTAMP',
                'null'          => new RawSql('CURRENT_TIMESTAMP')
            ],
            'updated_at' => [
                'type'          => 'TIMESTAMP',
                'null'          => new RawSql('CURRENT_TIMESTAMP')
            ],
        ]);
        $this->forge->addKey('USR_ID', true);
        $this->forge->createTable('SEA_USER');
    }

    public function down()
    {
        $this->forge->dropTable('SEA_USER');
    }
}

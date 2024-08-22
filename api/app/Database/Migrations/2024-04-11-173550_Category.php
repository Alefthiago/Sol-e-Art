<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class Category extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'CTG_ID' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'CTG_NAME' => [
                'type' => 'VARCHAR',
                'null' => false,
                'constraint' => 100,
            ],
            'CTG_SLUG' => [
                'type' => 'VARCHAR',
                'null' => false,
                'constraint' => 100,
            ],
            'created_at' => [
                'type'          => 'TIMESTAMP',
                'default'       => new RawSql('CURRENT_TIMESTAMP')
            ],
            'updated_at' => [
                'type'          => 'TIMESTAMP',
                'default'       => new RawSql('CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP')
            ],
        ]);
        $this->forge->addPrimaryKey('CTG_ID');
        $this->forge->createTable('CATEGORY');
    }

    public function down()
    {
        $this->forge->dropTable('CATEGORY');
    }
}
